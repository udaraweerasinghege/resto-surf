import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav className="header-menu">
                <ul>
                    <li>
                        <NavLink to="/" exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/restaurants" exact>Resurant List</NavLink>
                    </li>
                    <li>
                        <NavLink to="/stats" exact>Stats</NavLink>
                    </li>
                    <li>
                        <NavLink to="/restaurant" exact>Restaurant</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
