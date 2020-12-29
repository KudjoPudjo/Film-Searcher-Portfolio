import { CURRENT_FILM, SEARCHED_FILM, ALL_FILM, NEW_PIC, NEW_VIDEO } from "../actions/actions"

export const CurrentFilm = function(content) {
    return {
        type: CURRENT_FILM,
        content: content
    }
}
export const searchedFilm = function(content) {
    return {
        type: SEARCHED_FILM,
        content: content
    }
}
export const allFilm = function(content) {
    return {
        type: ALL_FILM,
        content: content
    }
}
export const newPic = function(content) {
    return {
        type: NEW_PIC,
        content: content
    }
}
export const newVideo = function(content) {
    return {
        type: NEW_VIDEO,
        content: content
    }
}