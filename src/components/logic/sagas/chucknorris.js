import * as types from "../types/chucknorris";
import { put,takeEvery } from "redux-saga/effects";
import {servicesChockNorris} from "../../services/chocknoris.service";
import * as actions from "../actions/chucknorris";

// creamos una function* la cual se le llama de esta manera ya que es un fuction saga

// El * antes de function nos indica que es un generador

function* fetchGetData(action) {

    try {
        // yield indica que esperaremos. En este caso esperaremos
      const response = yield servicesChockNorris();
      const { data, error } = response;
      // cuando el response ya obtiene una data podemos mandarla data
      if (error === null) {
          // Crea una descripción de efecto que indica al
          // middleware que programe el envío de una acción 
          //a la tienda. Es posible que este envío no sea inmediato,
          // ya que es posible que haya otras tareas más adelante en la cola de tareas de la saga o que aún estén en curso.
          // mandamos el put cuando tiene la data al fetched_chucknorris ya que esa es nuestra action que puede recibir los parametros
        yield put(actions.fetched_chucknorris(data));
      } else {
        // si en caso contrario no manda la información de un error y returna un boolean el cual es true de error
        yield put(
          actions.failed_chucknorris("HA OCURRIDO UN ERROR AL OBTENER LOS DATOS")
        );
      }
    } catch (error) {
      yield put(
        actions.failed_chucknorris("HA OCURRIDO UN ERROR AL OBTENER LOS DATOS")
      );
    }
  }
  
  // indicamos a la function saga que se ejecutara al momento de que comience a buscar la data 

  export function* watchChuknorris() {
    yield takeEvery(types.FETCHING_CHUCKNORRIS_STARTED, fetchGetData);
  }