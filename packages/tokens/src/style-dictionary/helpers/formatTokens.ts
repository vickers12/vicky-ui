import type { TransformedToken } from "style-dictionary";

export const formatTokens = (tokens: TransformedToken[]): [{ [t: string]: string }[]] => {
    const formatted = tokens.map((token: TransformedToken) => {
        const result: Record<string, string> = {};
        result[token.name] = token.value;

        return {
            name: token.name,
            value: token.value
        };
    });

    return [formatted];
};
