import type { Dictionary } from "style-dictionary";

interface TokenGroup {
    [key: string]: string | number | boolean | null | TokenGroup;
}

interface CoreReferenceMap {
    get: (key: string) => string | undefined;
}

const TYPE_TO_PANDA = {
    color: "colors",
    boxShadow: "shadows",
    fontFamily: "fonts",
    fontSize: "fontSizes",
    fontWeight: "fontWeights",
    lineHeight: "lineHeights",
    borderRadius: "radii",
    space: "spacing"
};

const TYPE_TO_PATH_SEGMENT = {
    color: "color",
    boxShadow: "shadow",
    fontFamily: ["font", "family", "font-family"],
    fontSize: ["font", "size", "font-size"],
    fontWeight: ["font", "weight", "font-weight"],
    lineHeight: "line-height",
    borderRadius: ["border-radius", "shape"],
    space: "space"
};

function filterPathSegments(type: keyof typeof TYPE_TO_PATH_SEGMENT, path: string[]): string[] {
    const skip = TYPE_TO_PATH_SEGMENT[type];
    if (!skip) {return path;}
    // Always treat as array for simplicity
    const skipList: string[] = Array.isArray(skip) ? skip : [skip];

    return path.filter(segment => !skipList.includes(segment));
}

const setNestedValue = (
    group: TokenGroup,
    path: string[],
    value: string | number | boolean | null | TokenGroup,
    pandaCat: string
) => {
    let ref = group;
    ref = pandaCat ? ((ref[pandaCat] ??= {}) as TokenGroup) : ref;
    for (let i = 0; i < path.length - 1; i++) {
        ref[path[i]] ??= {};
        ref = ref[path[i]] as TokenGroup;
    }
    ref[path[path.length - 1]] = { value: value };
};

function collapseTypographyPath(path: string[]) {
    // If path is [body, sm, medium], make key "sm-medium"
    // If path is [body, sm], make key "sm"
    // If path is [heading, lg, semi-bold], make key "lg-semi-bold"
    // (Assumes "body" or "heading" as first segment for semantic tokens)
    if (path.length >= 3) {
        // [body, sm, medium] => ["body", "sm-medium"]
        return [path[0], `${path[1]}-${path[2]}`];
    }

    return path;
}

export const pandaJson = async ({ dictionary }: { dictionary: Dictionary }) => {
    const grouped: { tokens: TokenGroup; semanticTokens: TokenGroup } = {
        tokens: {},
        semanticTokens: {}
    };

    const coreReferenceMap = new Map();

    dictionary.allTokens.forEach(token => {
        const type = token.type as keyof typeof TYPE_TO_PANDA;
        const pandaCat = TYPE_TO_PANDA[type];
        const filteredPath = filterPathSegments(type, token.path);
        const isTypography =
            type === "fontSize" ||
            type === "fontWeight" ||
            type === "fontFamily" ||
            type === "lineHeight";
        const finalPath =
            isTypography && filteredPath.length >= 3
                ? collapseTypographyPath(filteredPath)
                : filteredPath;

        function getPandaReference(ref: string, CRMap: CoreReferenceMap): string {
            const match = ref.match(/^{(.+)}$/);
            if (!match) {return ref;}
            const tokenName: string = match[1];
            const pandaPath: string | undefined = CRMap.get(tokenName);
            if (pandaPath) {return `{${pandaPath}}`;}

            return ref;
        }

        if (token.filePath.includes("/core/")) {
            setNestedValue(
                grouped.tokens,
                finalPath,
                token.value as string | number | boolean | null | TokenGroup,
                pandaCat
            );

            const outKey = [TYPE_TO_PANDA[type], ...finalPath].join("."); // "lineHeights.body-md-medium"
            coreReferenceMap.set(token.name, outKey); // SD's token.name is "lineHeights.1-5"
        } else if (token.filePath.includes("/semantic/")) {
            let value = token.value as string | number | boolean | null | TokenGroup;
            if (typeof token.original.value === "string" && /^\{.+\}$/.test(token.original.value)) {
                value = getPandaReference(token.original.value, coreReferenceMap);
            }
            setNestedValue(grouped.semanticTokens, finalPath, value, pandaCat);
        }
    });

    return JSON.stringify(grouped, null, 2);
};
