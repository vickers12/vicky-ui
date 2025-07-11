import type { TransformedToken } from "style-dictionary";
import type { AttributeTransform } from "style-dictionary/types";

export const attributeFont: AttributeTransform["transform"] = (token: TransformedToken) => {
    return {
        category: token.path[0],
        type: token.path[1],
        family: token.path[2],
        style: token.path[3],
        weight: token.path[4]
    };
};
