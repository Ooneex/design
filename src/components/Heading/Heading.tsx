import React, {ReactElement} from 'react';
import "./Heading.css";

type PropsType = {
    children: React.ReactNode
}

export const Heading = ({children}: PropsType): ReactElement => {
    return (
        <>
            {children}
        </>
    );
};
