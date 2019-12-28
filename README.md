# stylelint-config

This is my personal configuration for [Stylelint](https://github.com/stylelint/stylelint). It includes rules for CSS and SCSS and enforces a reasonable property order.

## Overview

The rules are based on the [sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines) and [rational-order](https://github.com/constverum/stylelint-config-rational-order) configurations and include a couple of custom additions and deletions.

The configuration is designed to be used together with [Prettier](https://github.com/prettier/prettier).

## Usage

1. Install the required packages:

```sh
yarn add --dev stylelint @samuelmeuli/stylelint-config
```

2. Create the following entry in your `package.json` file:

```json
{
	"stylelint": {
		"extends": "@samuelmeuli/stylelint-config"
	}
}
```

3. Add a linting script to your `package.json` file:

```json
{
	"scripts": {
		"lint": "stylelint --fix --max-warnings 0 '**/*.{css,sass,scss}'"
	}
}
```
