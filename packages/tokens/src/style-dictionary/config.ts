import type { Config /* , TransformedToken */ } from "style-dictionary";

const PREFIX = "vui";
const BUILD_PATH = "dist/";
const STORYBOOK_BUILD_PATH = "../src/stories";

/* StyleDictionary.registerTransform({
  name: 'name/vc-semantic-clean',
  type: 'name',
  transform: (token) => {
    const parts = token.path;
    const isSemantic = parts[0] === 'semantic';
    const nameParts = isSemantic ? parts.slice(2) : parts.slice(1);
    return `vc-${nameParts.join('-')}`.toLowerCase();
  }
}); */

/* const typeFilter = (allowedTypes: string[]) => (token: TransformedToken) =>
    allowedTypes.includes(token.type ?? ""); */

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
        }
        /* ,
        types: {
            transformGroup: "custom/js",
            buildPath: "src/types/",
            files: [
                {
                    destination: "index.ts",
                    format: "custom/types",
                    filter: typeFilter(["color", "space", "borderRadius", "boxShadow"])
                }
            ]
        } */
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
