import type { Config } from "style-dictionary";

const PREFIX = "vui";
const BUILD_PATH = "dist/";
const STORYBOOK_BUILD_PATH = "../src/stories";

export const config: Config = {
    source: ["src/core/**/*.tokens.json", "src/semantic/light/**/*.tokens.json"],
    platforms: {
        css: {
            transformGroup: "custom/css",
            buildPath: "dist/",
            prefix: PREFIX,
            files: [
                {
                    destination: "tokens.css",
                    format: "css/variables",
                    options: {
                        outputReferences: true,
                        selector: ":root"
                    }
                }
            ]
        },
        scss: {
            transformGroup: "custom/css",
            buildPath: "dist/",
            prefix: PREFIX,
            files: [
                {
                    destination: "tokens.scss",
                    format: "scss/variables",
                    options: {
                        outputReferences: true
                    }
                }
            ]
        },
        json: {
            transformGroup: "custom/css",
            buildPath: BUILD_PATH,
            prefix: PREFIX,
            files: [
                {
                    destination: "tokens.json",
                    format: "custom/json"
                },
                {
                    destination: `${STORYBOOK_BUILD_PATH}/datas/tokens.json`,
                    format: "custom/doc",
                    filter: "colors",
                    options: {
                        outputReferences: true
                    }
                }
            ]
        },
        pandaJson: {
            transformGroup: "panda/js",
            buildPath: BUILD_PATH,
            files: [
                {
                    destination: "tokens.panda.json",
                    format: "panda/json",
                    options: {
                        outputReferences: true
                    }
                }
            ]
        },
        ts: {
            transformGroup: "custom/css",
            buildPath: "src/types/",
            files: [{ destination: "index.ts", format: "custom/mappings", filter: "vui/not-core" }]
        }
    }
};

export const fontsConfig: Config = {
    source: ["src/asset/*.tokens.json"],
    platforms: {
        "css-font-url": {
            transforms: ["name/kebab", "attribute/cti"],
            buildPath: BUILD_PATH,
            prefix: PREFIX,
            files: [
                {
                    destination: "fonts.css",
                    format: "font-url",
                    filter: {
                        attributes: {
                            category: "asset",
                            type: "font"
                        }
                    }
                }
            ]
        }
    }
};
