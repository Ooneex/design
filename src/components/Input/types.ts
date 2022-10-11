import React from "react";

export type GetValueParamType = {
	name: string;
	value: string;
	isValid: boolean;
	errorMessage?: string;
	key: string;
};

export type InputType = {
	name?: string;
	type?: string;
	label?: string;
	value?: string;
	placeholder?: string;
	errorMessage?: string;
	className?: string;
	icon?: React.ReactNode;
	constraint?: RegExp;
	constraintMessage?: string;
	disabled?: boolean;
	variant?: "primary" | "secondary";
	validator?: (text: string) => string | true;
	getValue?: (input: GetValueParamType) => void;
};

export type InputPasswordConfirmationType =
	& Omit<InputType, "constraint" | "constraintMessage">
	& {
		password: string;
	};
