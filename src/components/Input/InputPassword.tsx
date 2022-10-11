import React from "react";
import { Input } from "./Input";
import { IconPassword } from "../Icon/mod";
import { InputType } from "./types";

const validatorFn = (value: string) => {
	value = value.trim();
	if (value.length < 5) {
		return "Your password must contain at least 6 characters";
	}

	if (!/[0-9]/i.test(value)) {
		return "Your password must contain at least 1 number";
	}

	if (!/[a-z]/i.test(value)) {
		return "Your password must contain at least 1 letter";
	}

	// if (!/[!@#$%^&*(){}[].,<>?\/=\\-`~|:;'"]/g.test(value)) {
	//     return "Your password must contain at least 1 special character";
	// }

	return true;
};

export const InputPassword = ({
	name = "password",
	type = "password",
	label = "Your password",
	value,
	placeholder = "Enter your password",
	errorMessage,
	className,
	constraint,
	constraintMessage = "Password type is required",
	disabled = false,
	validator = validatorFn,
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
			icon={<IconPassword variant={"white"} size={"sm"} />}
			constraint={constraint}
			constraintMessage={constraintMessage}
			validator={validator}
			getValue={getValue}
			disabled={disabled}
		/>
	);
};
