import React from "react";

export type TextType = {
    variant?: "primary" | "secondary",
    size?: "xs" | "sm" | "md" | "normal" | "lg" | "xlg",
    className?: string,
    element?: "p" | "span",
    children: React.ReactNode,
};

export type TextSizeType = Pick<TextType, "size" | "children" | "className">;
