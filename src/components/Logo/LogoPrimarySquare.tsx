import React, {ReactElement} from 'react';
import {Logo} from "./Logo";
import {LogoSizeType} from "./types";

export const LogoPrimarySquare = (props: LogoSizeType): ReactElement => <Logo type={"square"} variant={"primary"} {...props} />;
