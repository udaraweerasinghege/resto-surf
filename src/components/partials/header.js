import React, { Component } from "react";
import Nav from "./nav";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-container">
                    <h2>Your header</h2>
                </div>
                <Nav />
            </header>
        );
    }
}

export default Header;
