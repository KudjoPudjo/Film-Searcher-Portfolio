import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {allFilm} from "../../redux/actions-creators/actionsCreators"
import Api from '../../Api/restFullApi';
import "./TopRatedFilm.css"
import Loader from '../loader/Loader';
import FilmPoster from '../filmPoster/filmPoster';
import SwichPages from '../swichPages/swichPages';


function TopRatedFilm (){
    const dispatcher = useDispatch(); 
    const [loader,setLoader]= useState(true)   
    const RatedFilms = useSelector(state=>state.allFillms)    
    const GetRatedFilm = async ()=>{
        const responce =await Api.GetTopRatedFilm();        
        setTimeout(()=>{
            dispatcher(allFilm(responce.results))
            setLoader(false)
        },1500)
    }
    const Page =async (numberPage)=>{
        setLoader(true)
        const responce =await Api.GetTopRatedFilm(numberPage);
        console.log(responce);        
        setTimeout(()=>{            
            dispatcher(allFilm(responce.results))
            setLoader(false)
        },1500)
    }
    useEffect(()=>{
        GetRatedFilm()
    },[])    
    return (
        <div className="TopRatedFilm-wrapper">
            {loader?<div className="loader-wrapper"><Loader></Loader></div>:<div className="Film-wrapper">
                {RatedFilms?RatedFilms.map((elem,i)=>(<FilmPoster film={elem} key={i}></FilmPoster>)):null}
            </div>}  
            {loader?null:<SwichPages page={Page}></SwichPages>}       
        </div>
    )
}

export default TopRatedFilm