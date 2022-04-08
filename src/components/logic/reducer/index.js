import { combineReducers } from "redux";
import chucknorris, * as chocknorisSelectors from "./chucknorris";

// se crear un reducer combineReducers para utilizarlo en el store de nuestra aplicacion

const reducer = combineReducers({
    chucknorris
})

export default reducer;

// exportamos los reducers y con el alias de las sagas obtner los reducers creados en chucknorris.js/reducer
// y mandamos el estado 

export const gettingData = (state) => chocknorisSelectors.gettingData(state.chucknorris);
export const getData = (state) => chocknorisSelectors.getData(state.chucknorris);
export const getFailed = (state) => chocknorisSelectors.getFailed(state.chucknorris);
  