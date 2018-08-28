import React, { Fragment } from "react";
import Header from "./partials/header";
import Footer from "./partials/footer";

export default ({ page, children }) => {
    var PageName = () => {
       return page ? page : ''
    }
    return (
        <Fragment>
            <Header />
            <div className={`page-content ${PageName()}`}>
                {children}
            </div>
            <Footer />
        </Fragment>
    );
}