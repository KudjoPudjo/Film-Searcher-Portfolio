import React, { useEffect, useState } from "react";
import "./Slider.css"

function Slider({PicArr}) {
    const [CurrentPic,setCurrentPic] = useState(PicArr[0].file_path)
    function slidePic (slide){
        if(slide==="right"){
            let index = PicArr.findIndex(elem=>elem.file_path===CurrentPic);            
            if(index===PicArr.length-1){
                let url = PicArr[0].file_path                
                setCurrentPic(url)
            }
            else {
                let url = PicArr[index+1].file_path
                setCurrentPic(url)
            }
        }else if(slide==="left"){
            let index = PicArr.findIndex(elem=>elem.file_path===CurrentPic);
            if(index===0){
                let url = PicArr[PicArr.length-1].file_path
                setCurrentPic(url)
            }
            else {
                let url = PicArr[index-1].file_path
                setCurrentPic(url)
            }
        }
    }
    return (
        <div className="Slider">
            <div onClick={()=>slidePic("right")} className="slider right"></div>
            <div onClick={()=>slidePic("left")} className="slider left"></div>
            <img className="Slider-image" src={`https://image.tmdb.org/t/p/w185/${CurrentPic}`} alt="Poster"/>
        </div>
    )
}

export default Slider