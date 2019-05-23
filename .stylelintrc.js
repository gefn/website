module.exports = {
  extends: "stylelint-config-standard",
  plugins: ["stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "no-descending-specificity": null,
    "declaration-colon-newline-after": null,
    "at-rule-empty-line-before": null,
    "rule-empty-line-before": null,
    "font-family-no-missing-generic-family-keyword": null
  }
};
