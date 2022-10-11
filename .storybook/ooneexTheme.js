import { create } from "@storybook/theming";

import logo from './ooneex.svg';

export default create({
	base: "light",

	colorPrimary: "#55295E",
	colorSecondary: "#55295E",
	// colorSecondary: "#AB7F58",

	// UI
	appBorderRadius: 0,

	// Typography
	fontBase: "'Open Sans', sans-serif",
	fontCode: "monospace",

	// Form colors
	inputBorderRadius: 0,

	brandTitle: "Ooneex Docs",
	brandUrl: "https://ooneex.com",
	brandImage: logo,
	// brandTarget: "_self",
});
