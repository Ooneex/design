import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

export const parameters = {
	layout: 'centered',
	actions: {argTypesRegex: "^on[A-Z].*"},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
	backgrounds: {
		default: 'white',
		values: [
			{
				name: 'white',
				value: '#FFFFFF',
			},
			{
				name: 'Primary',
				value: '#55295E',
			},
			{
				name: 'Secondary',
				value: '#AB7F58',
			},
		],
	},
}

