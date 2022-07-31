import React, {ReactElement, useCallback, useRef, useState} from 'react';
import {InputType, GetValueParamType} from "./types";
import "./Input.css";

export const Input = ({
    name = "input",
    type = "text",
    label,
    value,
    placeholder = "Type something ...",
    errorMessage,
    className,
    icon,
    constraint,
    constraintMessage = "This field is required",
    disabled = false,
    variant = "primary",
    validator,
    getValue
}: InputType): ReactElement => {
    const inputEl = useRef<HTMLInputElement>(null);
    const [error, setError] = useState(errorMessage);

    const key: string = "input-" + crypto.randomUUID();

    const handler = useCallback(() => {
        if (!inputEl || !inputEl.current) {
            return;
        }

        const value = inputEl.current.value;

        if (validator) {
            const result = validator(value);
            if (result === true) {
                setError(undefined);
            } else {
                setError(result);
            }
        }

        if (constraint) {
            if (constraint.test(value)) {
                setError(undefined);
            } else {
                setError(constraintMessage);
            }
        }

        if (getValue) {
            const inputValue: GetValueParamType = {
                name,
                value,
                errorMessage: error,
                isValid: error === undefined,
                key
            };

            getValue(inputValue);
        }

    }, [constraint, constraintMessage, key, name, getValue, validator, error]);

    return (
        <label htmlFor={key} className={"_ooneex-input " + variant + (className ? " " + className : "")}>
            {label ? <p className={"label _f-f-semi-bold"}>{label}</p> : null}

            <p className={"wrapper"}>
                {
                    icon ? (
                        <span className={"icon"}>
                            {icon}
                        </span>
                    ) : null
                }
                <input
                    id={key}
                    type={type}
                    ref={inputEl}
                    onInput={handler}
                    onBlur={handler}
                    className={"element _f-f" + (icon ? " no-border-left" : "")}
                    placeholder={placeholder}
                    disabled={disabled}
                    defaultValue={value}
                />
            </p>

            {error ? <p className={"error _f-f-italic"}>{error}</p> : null}
        </label>
    );
};
