import React from "react";
import AuthUser from "../pageauth/AuthUser";
import Config from "../Config";
import "./Navbar.css";

const Navbar = () => {
    const { getToken, getLogout, getRol } = AuthUser();

    const logoutUser = () => {
        Config.getLogout("/logout").then((response) => {
            console.log(response);
            getLogout();
        });
    };

    const renderLinks = () => {
        if (getToken()) {
            return (
                <>
                    <li className="nav-item">
                        <a className="nav-link" href={`${getRol()}`}>
                            Administración
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={logoutUser}>
                            Logout
                        </a>
                    </li>
                </>
            );
        } else {
            return (
                <>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">
                            Login
                        </a>
                    </li>
                </>
            );
        }
    };

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav  ml-2">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="/"
                            >
                                Home
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">{renderLinks()}</ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
