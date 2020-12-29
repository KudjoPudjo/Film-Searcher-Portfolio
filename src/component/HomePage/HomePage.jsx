import React from "react";
import Pic from "../../assets/MainFraimPic.png"
import "./HomePage.css"

function HomePage() { 
    return (
        <div className="MainPic-wrapper">
            <img className="MainPic" src={Pic} alt="MainPagePic" />
        </div>
    )
}
export default HomePage