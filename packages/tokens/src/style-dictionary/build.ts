import type { TransformedToken } from "style-dictionary";
import StyleDictionary from "style-dictionary";
import { config, fontsConfig } from "./config";
import { customDoc, customJson, customTypes, fontUrl, pandaJson } from "./format";
import { attributeFont, isSizeType, pxToRem } from "../transform";

const sdTokens = new StyleDictionary(config);
const sdFonts = new StyleDictionary(fontsConfig);

sdTokens.registerFilter({
    name: "colors",
    filter: (token: TransformedToken): boolean => token.type === "color"
});

sdTokens.registerTransform({
    name: "pxToRem",
    type: "value",
    filter: isSizeType,
    transform: pxToRem
});

sdTokens.registerTransform({
    name: "attribute/font",
    type: "attribute",
    transform: attributeFont
});

sdTokens.registerTransformGroup({
    name: "custom/css",
    transforms: [
        "attribute/cti",
        "name/kebab",
        "time/seconds",
        "html/icon",
        "color/css",
        "size/rem",
        "asset/url",
        "fontFamily/css",
        "cubicBezier/css",
        "strokeStyle/css/shorthand",
        "border/css/shorthand",
        "typography/css/shorthand",
        "transition/css/shorthand",
        "shadow/css/shorthand",
        "pxToRem"
    ]
});

sdTokens.registerTransformGroup({
    name: "custom/js",
    transforms: ["attribute/cti", "name/kebab", "size/rem", "color/hex"]
});

sdTokens.registerTransformGroup({
    name: "panda/js",
    transforms: ["attribute/cti", "name/kebab", "size/rem", "color/hex", "pxToRem"]
});

sdTokens.registerFormat({
    name: "custom/json",
    format: customJson
});

sdTokens.registerFormat({
    name: "panda/json",
    format: pandaJson
});

sdTokens.registerFormat({
    name: "custom/doc",
    format: customDoc
});

/* sdTokens.registerFormat({
    name: "custom/types",
    format: customTypes
}); */

sdFonts.registerFormat({
    name: "font-url",
    format: fontUrl
});

console.log("\nBuild started...");

await sdTokens.hasInitialized;

console.log("\n|- 🌞️ Building tokens...");
await sdTokens.buildAllPlatforms();

console.log("\n|- 🔤 Building fonts...");
await sdFonts.hasInitialized;
await sdFonts.buildAllPlatforms();

console.log("\n🚀 Build completed!\n");
