import React from 'react';
import "./ContentPage.css"
import { Route, Switch } from "react-router-dom"
import HomePage from '../HomePage/HomePage';
import Search from '../search/Search';
import SearchedFilmPage from '../SearchedFilmPage/SearchedFilmPage';
import TopRatedFilm from '../TopRatedFilm/TopRatedFilm';
import notFoundPage from '../notFoundPage/notFoundPage';
import Popular from '../Popular/Popular';



function ContentPage() {    
    return (
        <div className="ContentPage-wrapper">
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/search" component={Search}></Route>
                <Route path="/Popular" component={Popular}></Route>
                <Route path="/top" component={TopRatedFilm}></Route>
                <Route path="/movie/:film" component={SearchedFilmPage}></Route>
                <Route path="/404" component={notFoundPage}></Route>
            </Switch>
        </div>
    )
}

export default ContentPage