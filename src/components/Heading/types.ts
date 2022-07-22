import React from "react";

export type HeadingType = {
    variant?: "primary" | "secondary" | "white",
    size?: "sm" | "md" | "normal" | "lg" | "xlg",
    icon?: React.ReactNode,
    className?: string,
    children?: React.ReactNode
};
