export default {
    extends: ["stylelint-config-standard-scss", "stylelint-config-clean-order"],
    rules: {
        // Optional: customize rules
        "at-rule-no-unknown": null, // needed to support @use/@forward/@mixin
        "scss/at-rule-no-unknown": true
    }
};
