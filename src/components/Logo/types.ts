export type LogoType = {
    variant?: "primary" | "secondary",
    type?: "square" | "round",
    size?: "xs" | "sm" | "md" | "normal" | "lg" | "xlg",
    fit?: boolean,
};

export type LogoSizeType = Pick<LogoType, "size" | "fit">;
