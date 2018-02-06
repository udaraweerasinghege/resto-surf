import React, { Fragment } from "react";
import Header from "./partials/header";
import Footer from "./partials/footer";

export default ({ page, children }) => {
    var PageName = () => {
        if (page) {
            return page;
        } else {
            return '';
        }
    }
    return (
        <Fragment>
            <Header />
            <div className={`container page-content ${PageName()}`}>
                {children}
            </div>
            <Footer />
        </Fragment>
    );
}