import React, { Fragment } from "react";
import Header from "./partials/header";
import Footer from "./partials/footer";

export default ({ page, children }) => (
    <Fragment>
        <Header />
        <div className={`page-content ${page}`}>
            {children}
        </div>
        <Footer />
    </Fragment>
);