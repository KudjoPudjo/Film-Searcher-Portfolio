import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import Api from "../../Api/restFullApi";
import { newPic, newVideo } from "../../redux/actions-creators/actionsCreators";
import Slider from "../slider/Slider";
import "./SearchedFilmPage.css"


function SearchedFilmPage() {
    const [allowVideo,setAllowVideo] = useState(false);
    const film = useSelector(state => state.searchedFilm)
    const dispatcher = useDispatch();
    const Picture = useSelector(state=>state.picArr)
    const Video = useSelector(state=>state.video);  
    async function getVideo(){
        const Responce = await Api.GetVideoFilm(film.id)
        dispatcher(newVideo(Responce))
    }
    async function getPic(){
        const Responce =await Api.GetPictureFilm(film.id);
        dispatcher(newPic(Responce))
    }
    useEffect(()=>{
        dispatcher(newPic([]))
        getPic()
        getVideo()
    },[])   
    console.log(Video);
    return (        
        <div className="SearchedFilmPage-wrapper">
            {!Object.keys(film).length?<Redirect to="/404"></Redirect>:null}
            <div className="SearchedFilm-wrapper">
                <div className="SearchFilm">
                    <h2 className="FilmPage-title">{film.title}</h2>
                    <h2 className="FilmPage-releaseDate">{film.release_date}</h2>
                    {Picture.posters?<div className="Slider-wrapper">
                        {Picture.posters?<Slider PicArr={Picture.posters.slice(0,4)}></Slider>:null}
                    </div>:<div className="FilmPage-poster-wrapper">
                        <img className="FilmPage-poster" src={`https://image.tmdb.org/t/p/w185/${film.poster_path}`} alt="Poster"/>
                    </div>}
                    <div className="SearchFilm-content-wrapper">
                        {allowVideo?<div className="Content-switcher">                                                    
                            <div onClick={()=>setAllowVideo(true)} className="Switcher active">Трейлер</div>
                            <div onClick={()=>setAllowVideo(false)} className="Switcher">Описание</div>
                        </div>:<div className="Content-switcher">                                                    
                            <div onClick={()=>setAllowVideo(true)} className="Switcher">Трейлер</div>
                            <div onClick={()=>setAllowVideo(false)} className="Switcher active">Описание</div>
                        </div>}
                        
                        {allowVideo?(Video.results.length?<div className="SearchFilm-content-video">
                            <div className="FilmPage-video">
                            <iframe title="Triller" width="560" height="315" src={`https://www.youtube.com/embed/${Video.results[0].key}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>:<div className="SearchFilm-content-video">
                            <h1>Трейлера нету извените</h1>
                        </div>): <div className="SearchFilm-content">
                            <p className="FilmPage-overview">{film.overview}</p>
                        </div>}                                                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchedFilmPage