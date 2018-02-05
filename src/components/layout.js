import React, { Component, Fragment } from "react";
import Header from "./partials/header";
import Footer from "./partials/footer";

class Layout extends Component {

    PageName = () => {
        const page = this.props.page;
        if (page) {
            return page;
        } else {
            return '';
        }
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className={`container page-content ${this.PageName()}`}>
                    {this.props.children}
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default Layout;
