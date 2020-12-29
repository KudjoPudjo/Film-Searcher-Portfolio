import React from "react";
import "./filmPoster.css";
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { searchedFilm } from "../../redux/actions-creators/actionsCreators";




function FilmPoster ({ film }) {
    let url = `https://image.tmdb.org/t/p/w185/${film.poster_path}`;
    const dispatcher = useDispatch()

    function saveFilmInf (){        
        dispatcher(searchedFilm(film))
    }

    return (
        <div className="FilmPoster-main-wrapper">
            <div className="FilmPoster-wrapper">
                <img className="Poster" src={url} alt="FilmPoster" />
                <Link className="FilmPoster-link" onClick={saveFilmInf} to={`/movie/${film.title.toLowerCase()}`}>
                    <p className="FilmPoster-title">{film.title}</p>
                    {film.release_date ? <p className="FilmPoster-title">({film.release_date})</p> : null}
                </Link>
            </div>
        </div>
    )
}

export default FilmPoster