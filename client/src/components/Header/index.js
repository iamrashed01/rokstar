import React from 'react';
import { Link } from 'react-scroll'
import logo from "../../doc/images/icon/logo.png";

function Header(props) {
    return (
        <header>
            <div class="header-area">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-3 col-sm-12">
                            <div class="logo">
                                <a href="index.html"><img src={logo} alt="logo" /></a>
                            </div>
                        </div>
                        <div class="col-md-9 d-none d-md-block">
                            <div class="main-menu">
                                <nav class="nav-menu">
                                    <ul id="nav_menu">
                                        <li><Link to="home" spy={true} smooth={true} offset={0} duration={1000} data-hover="Home"><span>Home</span></Link></li>
                                        <li><Link to="about" spy={true} smooth={true} offset={10} duration={1000} data-hover="about"><span>About</span></Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-sm-12 d-block d-md-none">
                            <div class="responsive-menu-wrap"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;