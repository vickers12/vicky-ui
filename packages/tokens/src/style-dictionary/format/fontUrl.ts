import type { FormatFn } from "style-dictionary/types";

export const fontUrl: FormatFn = async ({ dictionary }) => {
    const tokens = dictionary.allTokens;

    const fontImport = tokens.find(
        p =>
            p.path.includes("asset") &&
            p.path.includes("font") &&
            p.path.includes("googleImportUrl")
    );

    const importLine = fontImport ? `@import url("${fontImport.value}");\n\n` : "";

    return importLine;
};
