import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-container container">
                    <div className="left-half">
                        <NavLink to="/" exact>
                            <img id="nav-logo" src="/images/dolphin.svg" />
                            <h1>Resto Surf</h1>
                        </NavLink>
                    </div>
                    <div className="right-half">
                        <nav className="header-menu">
                            <ul>
                                <li>
                                    <NavLink to="/" exact>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/restaurants" exact>
                                        Restaurant List
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/stats" exact>
                                        Stats
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/ding-tai-fung" exact>
                                        Restaurant
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/add" exact>
                                        Add New
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
