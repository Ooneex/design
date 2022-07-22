import React from "react";

export type OnClickParamType = {
    name: string,
    key: string
};

export type ButtonType = {
    name?: string,
    variant?: "primary" | "secondary",
    iconLeft?: React.ReactNode,
    iconRight?: React.ReactNode,
    className?: string,
    children?: React.ReactNode,
    onClick?: (action: OnClickParamType) => void,
    disabled?: boolean,
    isLoading?: boolean,
    outline?: boolean,
};
