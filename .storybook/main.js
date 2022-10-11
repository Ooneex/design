module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
		"@storybook/addon-a11y",
		"@storybook/preset-scss",
		"@storybook/addon-storysource"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
	"staticDirs": ['../public'],
}
