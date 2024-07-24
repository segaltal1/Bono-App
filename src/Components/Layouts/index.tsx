import React from 'react';
import {Header} from "../Header";


type LayoutProps = {
    children: React.ReactNode;
};

export const Layout = ({children}: LayoutProps) => {

    return (
        <React.Fragment>
            <Header/>
            <div className="layout-wrapper">{children}</div>
        </React.Fragment>
    );
};

