import type { TransformedToken } from "style-dictionary";

export const flattenWithoutRole = (token: TransformedToken): string => {
    const { path, attributes } = token;
    const role = attributes?.role;

    if (!role) return token.path.join("-");

    // Remove the role from the path
    const transformedPath = path.map((part) => {
        if (part.startsWith(`${role}-`)) {
            return part.replace(`${role}-`, ""); // strip only the prefix
        }
        return part;
    });

    return transformedPath.join("-");
};
