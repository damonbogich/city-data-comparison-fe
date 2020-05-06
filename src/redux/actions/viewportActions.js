// todo
import ReactGA from "react-ga";
import * as types from "./actionTypes";


export function setViewport() {
    return (dispatch, getState) => {

        dispatch({ type: types.SET_VIEWPORT});

     
    
    }
}

export function setCityMarkers() {
    return (dispatch, getState) => {
        dispatch({ type: types.SET_CITYMARKERS});

        
    }
}