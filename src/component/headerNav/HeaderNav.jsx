import React from "react";
import { Link } from "react-router-dom";
import "./HeaderNav.css"



function HeaderNav({clearArrPic}) {
    return (
        <div className="Navigation-wrapper">            
            <nav className="Navigation">
                <Link  className="nav-li" to="/Search">Search</Link>
                <Link  className="nav-li" to="/Top">Top</Link>
                <Link  className="nav-li" to="/Popular">Popular</Link>
            </nav>
        </div>
    )
}

export default HeaderNav