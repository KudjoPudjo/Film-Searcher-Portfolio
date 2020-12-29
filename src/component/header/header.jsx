import React from 'react';
import { Link } from "react-router-dom"
import Logo from "../../assets/logo/logo.png"
import HeaderNav from '../headerNav/HeaderNav';
import "./header.css"

function Header() {
    
    function clickImg(e) {
        e.preventDefault()
    }
    
    return (
        <header className="Main-header">
            <div className="HeaderContent-wrapper">
                <div className="MainLogo-wrapper">
                    <Link  className="LogoWrapper" to="/">
                        <img onMouseDown={clickImg} className="Logo" src={Logo} alt="Logo" />
                    </Link>
                    <Link  className="LogoWrapper" to="/">
                        <div className="Logo-text">
                            <h4 className="Text">WalloFilm</h4>
                        </div>
                    </Link>
                </div>
                <HeaderNav ></HeaderNav>
            </div>
        </header>
    )
}

export default Header