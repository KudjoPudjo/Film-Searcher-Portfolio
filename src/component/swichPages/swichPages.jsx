import React from "react";
import "./swichPages.css"

function SwichPages ({page}){
    return (
        <div className="Switcher-wrapper">
            <p className="Pages" onClick={()=>page(1)}>1</p>
            <p className="Pages" onClick={()=>page(2)}>2</p>
            <p className="Pages" onClick={()=>page(3)}>3</p>
        </div>
    )
}

export default SwichPages