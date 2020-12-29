import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Api from "../../Api/restFullApi"
import { CurrentFilm } from "../../redux/actions-creators/actionsCreators"
import FilmPoster from "../filmPoster/filmPoster"
import Loader from "../loader/Loader"
import "./Search.css"

function Search() {
    const [filmName, setFilmName] = useState("")
    const [loader,setLoader] = useState(false)
    const currentFilm= useSelector(state=>state.currentFilm)
    const dispatcher = useDispatch()    
    async function getFilmByName() {
        setLoader(true);
        const responce = await Api.GetFilmByName(filmName);
        setTimeout(()=>{
            dispatcher(CurrentFilm(responce)) 
            setLoader(false)           
        },1000)
    }
    return (
        <div className="SearchMain-wrapper">
            <div className="SearchForm-wrapper">
                <div className="SearchInput-wrapper">
                    <input className="Search-input" onChange={(e) => setFilmName(e.target.value)} type="text" value={filmName} />
                    <button onClick={()=>getFilmByName(filmName)} className="Search-button">🔍</button>
                </div>
            </div>
            {loader?<div className="loader-wrapper"><Loader></Loader></div>:<div className="Film-wrapper">
                {currentFilm.results?currentFilm.results.map((elem,i)=>(<FilmPoster film={elem} key={i}></FilmPoster>)):null}
            </div>}
        </div>
    )
}

export default Search