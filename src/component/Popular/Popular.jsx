import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Api from "../../Api/restFullApi";
import { allFilm } from "../../redux/actions-creators/actionsCreators";
import FilmPoster from "../filmPoster/filmPoster";
import Loader from "../loader/Loader";
import SwichPages from "../swichPages/swichPages";
import "./Popular.css"

function Popular() {
    const dispatcher = useDispatch(); 
    const [loader,setLoader]= useState(true);
    const RatedFilms = useSelector(state=>state.allFillms) 
    const GetPopular = async ()=>{
        const responce =await Api.GetPopularFilm();
        console.log(responce);        
        setTimeout(()=>{            
            dispatcher(allFilm(responce.results))
            setLoader(false)
        },1500)
    }
    const Page =async (numberPage)=>{
        setLoader(true)
        const responce =await Api.GetPopularFilm(numberPage);
        console.log(responce);        
        setTimeout(()=>{            
            dispatcher(allFilm(responce.results))
            setLoader(false)
        },1500)
    }
    useEffect(()=>{
        GetPopular()
    },[]) 
    return (        
        <div className="Popular-wrapper">
            {loader ? <div className="loader-wrapper"><Loader></Loader></div> : <div className="Film-wrapper">
                {RatedFilms ? RatedFilms.map((elem, i) => (<FilmPoster film={elem} key={i}></FilmPoster>)) : null}
            </div>}
            {loader?null:<SwichPages page={Page}></SwichPages>}
        </div>
        
    )
}

export default Popular