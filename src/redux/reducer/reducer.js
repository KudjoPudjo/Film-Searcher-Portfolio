import { ALL_FILM, CURRENT_FILM, NEW_PIC, NEW_VIDEO, SEARCHED_FILM } from "../actions/actions"



const initialState = {
    currentFilm: {},
    allFillms: [],
    searchedFilm: {},
    picArr: [],
    video: []
}


export const Reducer = function(state = initialState, actions) {
    switch (actions.type) {
        case CURRENT_FILM:
            {
                console.log(actions.content);
                return {...state, currentFilm: actions.content }
            }
        case SEARCHED_FILM:
            {
                return {...state, searchedFilm: actions.content }
            }
        case ALL_FILM:
            {
                return {...state, allFillms: actions.content }
            }
        case NEW_PIC:
            {
                return {...state, picArr: actions.content }
            }
        case NEW_VIDEO:
            {
                console.log(actions.content);
                return {...state, video: actions.content }
            }
        default:
            return state
    }
}