export default {
    extends: ["stylelint-config-clean-order"],
    plugins: ["stylelint-scss"],
    rules: {
        // Optional: customize rules
        "at-rule-no-unknown": null, // needed to support @use/@forward/@mixin
        "scss/at-rule-no-unknown": true
    }
};
