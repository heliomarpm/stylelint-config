module.exports = {
	extends: [
		// Reasonable config for CSS and SCSS
		"stylelint-config-sass-guidelines",
		// Config for enforcing property order
		"stylelint-config-rational-order",
		// Disable rules that might conflict with Prettier
		"stylelint-config-prettier",
	],

	rules: {
		// Rule overrides for stylelint-config-sass-guidelines
		"color-hex-length": "long",
		"max-nesting-depth": null,
		"order/properties-alphabetical-order": null,
		"selector-no-qualifying-type": null,

		// Additional rules
		"declaration-no-important": true,
		"font-family-name-quotes": "always-unless-keyword",
		"font-weight-notation": "numeric",
		"function-url-no-scheme-relative": true,
	},
};
