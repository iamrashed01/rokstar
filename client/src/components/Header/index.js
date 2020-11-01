import React from 'react';
import { Link } from 'react-scroll'
import logo from "../../doc/images/icon/logo.png";

function Header(props) {
    return (
        <header>
            <div className="header-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 col-sm-12">
                            <div className="logo">
                                <img src={logo} alt="logo" />
                            </div>
                        </div>
                        <div className="col-md-9 d-none d-md-block">
                            <div className="main-menu">
                                <nav className="nav-menu">
                                    <ul id="nav_menu">
                                        <li><Link to="home" spy={true} smooth={true} offset={0} duration={1000} data-hover="Home"><span>Home</span></Link></li>
                                        <li><Link to="about" spy={true} smooth={true} offset={10} duration={1000} data-hover="about"><span>About</span></Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-sm-12 d-block d-md-none">
                            <div className="responsive-menu-wrap"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;