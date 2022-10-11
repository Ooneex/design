import React from "react";
import { Input } from "./Input";
import { IconUserAlt } from "../Icon/mod";
import { InputType } from "./types";

export const InputUser = ({
	name = "user",
	type = "text",
	label = "Your firstname",
	value,
	placeholder = "Enter your firstname",
	errorMessage,
	className,
	constraint = /^[a-z]/i,
	constraintMessage = "This field must start with a letter",
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
			icon={<IconUserAlt variant={"white"} size={"sm"} />}
			constraint={constraint}
			constraintMessage={constraintMessage}
			validator={validator}
			getValue={getValue}
			disabled={disabled}
		/>
	);
};
