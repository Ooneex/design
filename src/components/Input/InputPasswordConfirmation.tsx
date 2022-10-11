import React, { useCallback } from "react";
import { Input } from "./Input";
import { IconPassword } from "../Icon/mod";
import { InputPasswordConfirmationType } from "./types";

export const InputPasswordConfirmation = ({
	name = "password-confirmation",
	type = "password",
	label = "Confirm your password",
	value,
	password,
	placeholder = "Enter your password again",
	errorMessage,
	className,
	disabled = false,
	validator,
	getValue,
}: InputPasswordConfirmationType) => {
	const validatorFn = useCallback((value: string) => {
		if (value !== password) {
			return "Password confirmation failed";
		}

		return true;
	}, [password]);

	return (
		<Input
			name={name}
			type={type}
			label={label}
			value={value}
			placeholder={placeholder}
			errorMessage={errorMessage}
			className={className}
			icon={<IconPassword variant={"white"} size={"sm"} />}
			validator={validator ?? validatorFn}
			getValue={getValue}
			disabled={disabled}
		/>
	);
};
