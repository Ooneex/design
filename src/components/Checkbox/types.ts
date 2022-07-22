import React from "react";

export type CheckboxGetValueParamType = {
    name: string,
    label?: React.ReactNode | string,
    isChecked?: boolean,
    key: string
};

export type CheckboxType = {
    name?: string,
    checked?: boolean,
    className?: string,
    label?: React.ReactNode | string,
    disabled?: boolean,
    variant?: "primary" | "secondary",
    getValue?: (input: CheckboxGetValueParamType) => void
};
