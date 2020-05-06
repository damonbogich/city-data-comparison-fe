// todo
import * as types from "../actions/actionTypes";
import citiesIndex from "../../data/city_ids.json";

let cityIndex = [];
Object.keys(citiesIndex).forEach((item) => {
  let city = citiesIndex[item];
  city.name = item;
  cityIndex.push(city);
});

export const initialState = {
    cityMarkers: [...cityIndex],
    viewport: {
        width: "100%",
        height: "100%",
        longitude: -96.7,
        latitude: 38.55,
        zoom: 3.55,
        minZoom: 3.5,
        maxZoom: 10,
        trackResize: true,
    },
  };

export default function viewportReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_VIEWPORT:
            return {
                ...state,
                viewport: {
                    ...state.viewport,
                    longitude: payload.longitude,
                    latitude: payload.latitude
                }
            }
        case types.SET_CITYMARKERS:
            return {
                ...state,
                cityMarkers: [...payload]
            }
        case types.ADD_CITYMARKERS:
            return {
                ...state,
                cityMarkers: [...cityMarkers, payload]
            }
        default:
            return state;
    }
}