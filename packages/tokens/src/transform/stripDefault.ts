import type { TransformedToken } from "style-dictionary";

export const stripDefault = (token: TransformedToken) => {
    const input = token.name ?? token.path.join("-");
    // remove a trailing segment named "default" (case-insensitive)
    let out = input.replace(/(?:^|[-_.\s])default$/i, "");
    // tidy separators (no stylistic changes beyond this)
    out = out.replace(/--+/g, "-").replace(/^-+|-+$/g, "");

    return out || input;
};
