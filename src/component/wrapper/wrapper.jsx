import React from "react";
import { BrowserRouter } from "react-router-dom";
import ContentPage from "../contentPage/ContentPage"
import Header from "../header/header";
import "./wrapper.css"



function Wrapper() {
    return (
        <BrowserRouter>
            <div className="Wrapper">
                <Header></Header>
                <ContentPage></ContentPage>
            </div>
        </BrowserRouter>
    )
}


export default Wrapper