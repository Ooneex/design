import React, { ReactElement } from "react";
import { Logo } from "./Logo";
import { LogoSizeType } from "./types";

export const LogoPrimaryRound = (props: LogoSizeType): ReactElement => (
	<Logo type={"round"} variant={"primary"} {...props} />
);
