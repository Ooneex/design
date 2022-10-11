import React from "react";
import { Input } from "./Input";
import { IconPhone } from "../Icon/mod";
import { InputType } from "./types";

export const InputPhone = ({
	name = "phone",
	type = "phone",
	label = "Your number phone",
	value,
	placeholder = "Enter your number phone",
	errorMessage,
	className,
	constraint = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
	constraintMessage = "Phone format is required",
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
			icon={<IconPhone variant={"white"} size={"sm"} />}
			constraint={constraint}
			constraintMessage={constraintMessage}
			validator={validator}
			getValue={getValue}
			disabled={disabled}
		/>
	);
};
