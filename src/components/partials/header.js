import React from "react";
import { NavLink } from "react-router-dom";

export default ({ restaurants }) => (
    <header>
        <div className="header-container container">
            <div className="left-half">
                <NavLink to="/" exact>
                    <img alt="Resto Surf logo" id="nav-logo" src="/images/dolphin.svg" />
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
                            <NavLink to="/restaurants/ding-tai-fung" exact>
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