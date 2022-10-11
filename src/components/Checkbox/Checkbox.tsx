import React, { ReactElement, useCallback, useRef, useState } from "react";
import { CheckboxGetValueParamType, CheckboxType } from "./types";
import { IconCheck } from "../Icon/IconCheck";
import "./Checkbox.scss";

export const Checkbox = ({
	name = "checkbox",
	checked = false,
	label,
	variant = "primary",
	disabled = false,
	className,
	getValue,
}: CheckboxType): ReactElement => {
	const [isChecked, setIsChecked] = useState(checked);
	const inputEl = useRef<HTMLInputElement>(null);
	const key: string = "checkbox-" + crypto.randomUUID();

	const handler = useCallback(() => {
		if (!inputEl || !inputEl.current) {
			return;
		}

		const isChecked = inputEl.current.checked;

		if (getValue) {
			const inputValue: CheckboxGetValueParamType = {
				name,
				label,
				isChecked,
				key,
			};

			getValue(inputValue);
		}

		setIsChecked(isChecked);
	}, [getValue, key, name, label]);

	return (
		<label
			htmlFor={key}
			className={"_ooneex-checkbox " + variant + (isChecked ? " checked" : "") +
				(disabled ? " disabled" : "") + (className ? " " + className : "")}
		>
			<span className={"wrapper"}>
				<span className={"icon"}>
					<IconCheck variant={variant} />
				</span>
				{label ? <span className={"label _f-f-semi-bold"}>{label}</span> : null}
				<input
					id={key}
					type={"checkbox"}
					ref={inputEl}
					onChange={handler}
					defaultChecked={checked}
					disabled={disabled}
					style={{ display: "none" }}
				/>
			</span>
		</label>
	);
};
