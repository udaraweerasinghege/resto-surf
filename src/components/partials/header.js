import React, { Component } from "react";
import Nav from "./nav";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-container container">
                    <div className="left-half">
                        <h2>Your header</h2>
                    </div>
                    <div className="right-half">
                        <Nav />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
