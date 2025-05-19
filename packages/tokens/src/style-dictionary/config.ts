import { Config } from 'style-dictionary';

const BUILD_PATH = "dist/";

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


export const config: Config = {
  source: [
    'src/core/**/*.tokens.json',
    'src/semantic/light/**/*.tokens.json'
  ],
  platforms: {
    css: {
      "transformGroup": "custom/css",
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
            selector: ':root'
          }
        }
      ]
    },
    json: {
      "transformGroup": "custom/css",
      buildPath: BUILD_PATH,
      files: [
        {
          destination: 'tokens.json',
          format: 'custom/json',
        }
      ]
    }
  }
};

export const fontsConfig: Config = {
    "source": ["src/asset/*.tokens.json"],
    "platforms": {
        "css-font-face": {
            "transforms": ["name/cti/kebab", "attribute/font"],
            "buildPath": BUILD_PATH,
            "files": [
                {
                    "destination": "fonts.css",
                    "format": "font-face",
                    "filter": {
                        "attributes": {
                            "category": "asset",
                            "type": "font"
                        }
                    }
                }
            ]
        }
    }
};
