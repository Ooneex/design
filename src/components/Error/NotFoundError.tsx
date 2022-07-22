import React, {ReactElement} from 'react';
import notFound from "./not-found.svg";
import {Spacer} from "../Spacer/Spacer";
import {Image} from "../Image/Image";
import {H1} from "../Heading/H1";

export const NotFoundError = (): ReactElement => {
    return (
        <div className={"_ooneex-error _text-center"}>
            <Spacer size={"xxlg"} />
            <Image src={notFound} alt={"NotFound"} />
            <Spacer />
            <H1 size={"sm"} variant={"secondary"}>Page not found</H1>
        </div>
    );
};
