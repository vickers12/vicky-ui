/* import { styledSystemToTokenMappings } from "@vicky-ui/tokens/types";

function getTokenVar(map: typeof Map, value: string): string | undefined {
    if (map instanceof Map && map.has(value)) {
        return `var(--vui-${map.get(value)})`;
    }

    return undefined;
}

function getTokenVarFromSubCat(
    map: typeof Map,
    subCategory: string,
    value: string
): string | undefined {
    if (subCategory && map instanceof Map) {
        const roleMap = map.get(subCategory);

        return getTokenVar(roleMap, value);
    }

    return undefined;
}

export function resolveTokenVar(
    value: string | undefined,
    category: string,
    role?: string
): string | undefined {
    if (!value) {return undefined;}

    const map = styledSystemToTokenMappings.get(category);
    if (!map) {return value;}

    // Try role-based (for color tokens)
    const tokenValue = getTokenVarFromSubCat(map, role ?? "", value);
    if (tokenValue) {
        return tokenValue;
    }

    // Try core map
    const coreTokenValue = getTokenVarFromSubCat(map, "core", value);
    if (coreTokenValue) {
        return coreTokenValue;
    }

    // Try map without subcategory
    const valueFromMap = getTokenVar(map, value);
    if (valueFromMap) {
        return valueFromMap;
    }

    return value;
}
 */
