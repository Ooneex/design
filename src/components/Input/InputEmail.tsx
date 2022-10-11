import React from "react";
import { Input } from "./Input";
import { IconEmail } from "../Icon/mod";
import { InputType } from "./types";

export const InputEmail = ({
	name = "email",
	type = "email",
	label = "Your email address",
	value,
	placeholder = "Enter your email address",
	errorMessage,
	className,
	constraint = /^[a-z0-9_\\.-]+@[a-z0-9_-]+\.[a-z]{1,10}$/i,
	constraintMessage = "Email type is required",
	disabled = false,
	validator,
	getValue,
}: InputType) => {
	return (
		<Input
			name={name}
			type={type}
			label={label}
			value={value}
			placeholder={placeholder}
			errorMessage={errorMessage}
			className={className}
			icon={<IconEmail variant={"white"} size={"sm"} />}
			constraint={constraint}
			constraintMessage={constraintMessage}
			validator={validator}
			getValue={getValue}
			disabled={disabled}
		/>
	);
};
