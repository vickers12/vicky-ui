/* eslint-disable import/no-named-as-default-member */
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

const sourceFiles = [
    "**/*.[jt]s?(x)",
    "**/*.[cm]js"
];

const typescriptFiles = [
    "**/*.ts?(x)"
];

const reactTestFiles = [
    "**/*.test.[jt]sx",
    "**/*-test.[jt]sx",
    "**/__tests__/*.[jt]sx",
    "**/test.[jt]sx"
];

const storybookFiles = [
    "**/*.(stories|storybook|story|chroma).[jt]s?(x)"
];

const mainStorybookFiles = [
    ".storybook/main.@(js|cjs|mjs|ts)",
    "storybook/main.@(js|cjs|mjs|ts)"
];

export default tseslint.config(
    js.configs.recommended,
    tseslint.configs.recommended,
    {
        ignores: ["**/dist/*", "node_modules", "**/node_modules", "pnpm-lock.yaml", "**/tokens/**/types/*"]
    },
    {
        files: [...sourceFiles, ...typescriptFiles, ...reactTestFiles, ...storybookFiles, ...mainStorybookFiles],
        extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
        languageOptions: {
            parser: tseslint.parser,
            sourceType: "module",
            ecmaVersion: "latest",
            parserOptions: {
                warnOnMultipleProjects: false,
                tsconfigRootDir: import.meta.dirname,
                ecmaFeatures: { jsx: true }
            },
            globals: globals.browser
        },
        plugins: {
            "@typescript-eslint": tseslint.plugin,
            react,
            "jsx-a11y": jsxA11y,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "@stylistic": stylistic
        },
        rules: {
            // React
            ...react.configs.recommended.rules,

            // React Hooks
            ...reactHooks.configs.recommended.rules,

            // JSX a11y
            ...jsxA11y.configs.recommended.rules,

            // eslint:recommended overwrite some rules
            "no-cond-assign": ["error", "except-parens"],
            "no-labels": ["warn", { allowLoop: true, allowSwitch: false }],
            "no-prototype-builtins": "off",

            // https://eslint.org/docs/rules
            // Extra eslint rules

            // Possible Problems
            "array-callback-return": "error",
            "no-self-compare": "error",
            "no-template-curly-in-string": "error",

            // Suggestions
            "no-array-constructor": "warn",
            "no-caller": "warn",
            "no-eval": "warn",
            "no-extend-native": "warn",
            "no-extra-bind": "warn",
            "no-extra-label": "warn",
            "no-implied-eval": "warn",
            "no-iterator": "warn",
            "no-label-var": "warn",
            "no-lone-blocks": "warn",
            "no-multi-str": "warn",
            "no-new-func": "warn",
            "no-new-object": "warn",
            "no-new-wrappers": "warn",
            "no-octal-escape": "warn",
            "no-useless-computed-key": "warn",
            "no-useless-concat": "warn",
            "no-script-url": "warn",
            "no-sequences": "warn",
            "no-throw-literal": "warn",
            "prefer-const": "warn",
            "no-var": "warn",
            "curly": "warn",
            "no-restricted-properties": "warn",
            "no-unneeded-ternary": "warn",
            "no-param-reassign": "off",
            "eqeqeq": ["warn", "smart"],
            "no-mixed-operators": [
                "warn",
                {
                    groups: [
                        ["&", "|", "^", "~", "<<", ">>", ">>>"],
                        ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                        ["&&", "||"],
                        ["in", "instanceof"]
                    ],
                    allowSamePrecedence: false
                }
            ],
            "no-restricted-syntax": ["error", "WithStatement"],
            "no-restricted-globals": ["error"],
            "no-useless-rename": [
                "warn",
                {
                    ignoreDestructuring: false,
                    ignoreImport: false,
                    ignoreExport: false
                }
            ],
            "strict": ["warn", "never"],

            // Layout & Formatting
            "no-native-reassign": "warn", // deprecated replaced by no-global-assign, deja ds recommended
            "no-negated-in-lhs": "warn", // deprecated replaced by no-unsafe-negation, deja ds recommended
            "padding-line-between-statements": [
                "warn",
                { blankLine: "always", prev: "*", next: "return" }
            ],

            "rest-spread-spacing": ["warn", "never"],
            "unicode-bom": ["warn", "never"],
            "comma-spacing": ["warn", { "before": false, "after": true }],
            "keyword-spacing": ["warn", { before: true, after: true }],
            "arrow-spacing": ["warn", { before: true, after: true }],
            "space-before-blocks": ["warn", "always"],
            "space-in-parens": ["warn", "never"],
            "padded-blocks": ["warn", "never"],
            "brace-style":["warn", "1tbs", { "allowSingleLine": true }],
            "new-parens": "warn",
            "no-whitespace-before-property": "warn",
            "no-multi-spaces": "warn",
            "no-multiple-empty-lines": "warn",
            "space-infix-ops": "warn",
            "max-len": ["warn", { tabWidth: 4, code: 300 }],
            "comma-dangle": ["warn", "never"],
            "dot-location": ["warn", "property"],
            "arrow-parens": ["warn", "as-needed"],

            // Custom rules
            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
            "react/react-in-jsx-scope": "off",
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "react/prop-types": "off",
            // https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
            "import/no-amd": "error",
            "import/no-webpack-loader-syntax": "error",
            "import/no-self-import": "error",
            "import/newline-after-import": "warn",
            "import/no-duplicates": "warn",
            "import/order": [
                "error",
                {
                    "newlines-between": "always",
                    groups: [["builtin", "external"], "parent", ["sibling", "index"]],
                    pathGroups: [
                        {
                            pattern: "./*.module.css", // CSS comes in a group after the last group
                            group: "object",
                            position: "after"
                        }
                    ],
                    pathGroupsExcludedImportTypes: ["builtin"],
                    alphabetize: {
                        order: "asc",
                        caseInsensitive: true
                    }
                }
            ],
            // @typescript-eslint/recommended disables
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/no-empty-object-type": ["error", { allowInterfaces: "with-single-extends", allowObjectTypes: "never" }],

            // additional rules we want
            "@typescript-eslint/consistent-type-definitions": "warn",
            "@typescript-eslint/explicit-member-accessibility": ["warn", { accessibility: "no-public" }],
            "@typescript-eslint/method-signature-style": "warn",
            "no-dupe-class-members": "off",
            "@typescript-eslint/no-dupe-class-members": "error",
            "no-loop-func": "off",
            "@typescript-eslint/no-loop-func": "warn",
            "no-shadow": "off",
            "@typescript-eslint/no-shadow": "warn",
            "no-unused-expressions": "off",
            "@typescript-eslint/no-unused-expressions": [
                "error",
                {
                    allowShortCircuit: true,
                    allowTernary: true,
                    allowTaggedTemplates: true
                }
            ],
            "no-use-before-define": "off",
            "no-useless-constructor": "off",
            "@typescript-eslint/no-useless-constructor": "warn",
            "object-curly-spacing": "off",
            quotes: "off",
            "@stylistic/quotes": ["warn", "double"],
            "@typescript-eslint/no-import-type-side-effects": "warn",
            "@typescript-eslint/consistent-type-imports": [
                "warn",
                {
                    prefer: "type-imports",
                    disallowTypeAnnotations: true,
                    fixStyle: "inline-type-imports"
                }
            ],

            "@stylistic/member-delimiter-style": "warn",
            "@stylistic/comma-dangle": ["warn", "never"],
            indent: "off",
            "@stylistic/indent": [
                "warn",
                4,
                {
                    SwitchCase: 1,
                    CallExpression: { arguments: "first" }
                }
            ],
            "@stylistic/object-curly-spacing": ["warn", "always"],
            semi: "off",
            "@stylistic/semi": ["warn", "always"],


            // https://eslint.org/docs/rules
            "jsx-quotes": ["warn", "prefer-double"],

            // react/recommended overrides
            "react/jsx-no-duplicate-props": ["warn", { ignoreCase: true }],
            "react/jsx-no-undef": ["warn", { allowGlobals: true }],

            // react/recommended disables
            "react/display-name": "off",
            "react/no-unescaped-entities": "off",
            "react/jsx-key": "off",

            // extra react rules
            "react/forbid-foreign-prop-types": ["warn", { allowInPropTypes: true }],
            "react/jsx-pascal-case": [
                "warn",
                {
                    allowAllCaps: true,
                    ignore: []
                }
            ],
            "react/no-typos": "error",
            "react/style-prop-object": "warn",
            "react/button-has-type": "warn",
            "react/destructuring-assignment": [
                "warn",
                "always",
                { ignoreClassFields: true }
            ],
            "react/jsx-boolean-value": ["warn", "never"],
            "react/default-props-match-prop-types": "warn",
            "react/no-unused-state": "warn",
            "react/no-array-index-key": "warn",
            "react/no-access-state-in-setstate": "warn",
            "react/jsx-filename-extension": ["warn", { "extensions": [".jsx", ".tsx"] }],
            "react/jsx-curly-brace-presence": "warn",
            "react/no-unused-prop-types": [
                "warn",
                { customValidators: [], skipShapeProps: true }
            ],

            "react/jsx-closing-bracket-location": [1, "line-aligned"],
            "react/jsx-tag-spacing": ["warn", { beforeSelfClosing: "always" }],
            "react/jsx-max-props-per-line": [
                "warn",
                { maximum: 1, when: "multiline" }
            ],
            "react/jsx-curly-spacing": ["warn", { children: true, when: "never" }]
        },
        settings: {
            "import/resolver": {
                typescript: {
                // optionally specify a project or tsconfig path
                    project: ["./tsconfig.json", "./packages/*/tsconfig.json"],
                    alwaysTryTypes: true, // optional
                    noWarnOnMultipleProjects: true
                }
            },
            react: {
                version: "detect"
            }
        }
    },
    {
        files: ["**/.storybook/**/*.{js,jsx,ts,tsx}", "**/storybook/**/*.{js,jsx,ts,tsx}"],
        rules: {
            "@stylistic/indent": "off"
        }
    }
);
