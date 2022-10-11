import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import { Button } from './Button';
import {ButtonType} from "../types";

export default {
	/* 👇 The title prop is optional.
	* See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	* to learn how to generate automatic titles
	*/
	title: 'Components/Button/Default',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonType) => <Button {...args}>Button</Button>;
export const Primary = Template.bind({});
Primary.args = {variant: "primary"};

export const Secondary = Template.bind({});
Secondary.args = {variant: "secondary"};

export const Text = Template.bind({});
Text.args = {variant: "text"};

export const Grey = Template.bind({});
Grey.args = {variant: "grey"};

export const White = Template.bind({});
White.args = {variant: "white"};

export const Success = Template.bind({});
Success.args = {variant: "success"};

export const Warning = Template.bind({});
Warning.args = {variant: "warning"};

export const Info = Template.bind({});
Info.args = {variant: "info"};

export const Error = Template.bind({});
Error.args = {variant: "error"};
