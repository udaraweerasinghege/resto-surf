import React, { Component, Fragment } from "react";
import Header from "./partials/header";
import Footer from "./partials/footer";

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                    <div className="container page-content">
                        {this.props.children}
                    </div>
                <Footer />
            </Fragment>
        );
    }
}

export default Layout;
