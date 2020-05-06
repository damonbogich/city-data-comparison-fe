// todo
import ReactGA from "react-ga";
import * as types from "./actionTypes";


export function setViewport(viewport) {
    return (dispatch, getState) => {
        dispatch({ type: types.SET_VIEWPORT, payload: {...viewport}});
    }
}

export function setCityMarkers(cityMarkers) {
    return (dispatch, getState) => {
        dispatch({ type: types.SET_CITYMARKERS, payload: {...cityMarkers}});


    }
}

export function addCityMarkers(cityMarkers) {
    return (dispatch, getState) => {
        dispatch({ type: types.ADD_CITYMARKERS, payload: {...cityMarkers}});


    }
}