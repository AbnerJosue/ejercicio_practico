import { combineReducers } from "redux";
import * as types from "../types/chucknorris";

// esta función recibe dos parámetros, el estado inicial y una acción y dependiendo del tipo de acción realizará una operación u otra en el estado.

// en el caso del estado initial de mi 
// reducer es false , pero le indico que cuando el estado de la aplicacion comience a buscar pasara a true

const fetchingDataStarted = (state = false, action) => {
    switch (action.type) {
      case types.FETCHING_CHUCKNORRIS_STARTED: {
        return true
      }
  
      case types.FETCHING_CHUCKNORRIS_COMPLETED: {
        return false
      }
  
      case types.FETCHING_CHUCKNORRIS_FAILED: {
        return false
      }
  
      default: {
        return state;
      }
    }
  };

  // en el caso del estado del reducer el cual recibirar los parametros lo colacamos como null
  // esto para que la información no aparezca con undefined al momento de obtener la data del servicio y poder validar
  
  const fetchedDataCompleted = (state = null, action) => {
    switch (action.type) {
      case types.FETCHING_CHUCKNORRIS_COMPLETED: {
        return action.payload.request || state; 
      }
  
      default: {
        return state;
      }
    }
  };
  
  // y al igual que el reducer de obtener la informacion en este caso si nos muestra un error 
  // este mostrara que es true cuando la saga enviada al store sea un error 

  const fetchedDataFailed = (state = false, action) => {
    switch (action.type) {
      case types.FETCHING_CHUCKNORRIS_STARTED: {
        return false
      }
  
      case types.FETCHING_CHUCKNORRIS_COMPLETED: {
        return false
      }
  
      case types.FETCHING_CHUCKNORRIS_FAILED: {
        return true
      }
  
      default: {
        return state;
      }
    }
  };

// El combineReducers devuelve un objeto cuyos valores son diferentes funciones reductoras 
// en una única función reductora que puedes enviar a createStore .
// El reducer resultante llama cada reducer interno,
// y junta sus resultados en un único objeto de estado.

const chucknorris = combineReducers({
    fetchingDataStarted,
    fetchedDataCompleted,
    fetchedDataFailed,
  });
  
  // exportamos el combine Reducers

  export default chucknorris;
  
  // y exportamos los estados de nuestros reducer

  export const gettingData = (state) => state.fetchingDataStarted;
  export const getData = (state) => state.fetchedDataCompleted;
  export const getFailed = (state) => state.fetchedDataFailed;
  