import React from "react";

export type LinkType = {
    to: string,
    ext?: boolean,
    className?: string,
    children: React.ReactNode,
};
