export default {
    extends: ["stylelint-config-standard-scss", "stylelint-config-clean-order"],
    plugins: ["stylelint-prettier"],
    rules: {
        // Optional: customize rules
        "at-rule-no-unknown": null, // needed to support @use/@forward/@mixin
        "scss/at-rule-no-unknown": true,
        "selector-class-pattern": [
            "^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$",
            {
                /** This option will resolve nested selectors with & interpolation. - https://stylelint.io/user-guide/rules/selector-class-pattern/#resolvenestedselectors-true--false-default-false */
                resolveNestedSelectors: true,
                /** Custom message */
                message: function expected(selectorValue) {
                    return `Expected class selector "${selectorValue}" to match BEM CSS pattern https://en.bem.info/methodology/css. Selector validation tool: https://regexr.com/3apms`;
                }
            }
        ],
        "color-hex-length": "long",
        "prettier/prettier": true
    }
};
