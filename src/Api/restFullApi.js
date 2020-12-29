const Api = {
    GetPopularFilm: async function(pageNumber) {
        let page = pageNumber ? `&page=${pageNumber}` : null
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=f77baf6b1df6a6f0003ae950200ce049&language=ru-RUS" + page);
        return await response.json()
    },
    GetTopRatedFilm: async function(pageNumber) {
        let page = pageNumber ? `&page=${pageNumber}` : null
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=f77baf6b1df6a6f0003ae950200ce049&language=ru-RUS` + page);
        return await response.json()
    },
    GetFilmByName: async function(nameFilm) {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${nameFilm.toLowerCase()}&language=rus&api_key=f77baf6b1df6a6f0003ae950200ce049`)
        return await response.json()

    },
    GetPictureFilm: async function(idFilm) {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${idFilm}/images?api_key=f77baf6b1df6a6f0003ae950200ce049`)
        return await response.json()
    },
    GetVideoFilm: async function(movie_id) {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=f77baf6b1df6a6f0003ae950200ce049&language=rus-RUS`);
        return await response.json();
    }

}

export default Api