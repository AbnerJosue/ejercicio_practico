import * as types from "../types/chucknorris";

//////////////////////////////////////////////////////
// 
// se crea las actions para enviar los parametros desde nuestro componente a la store
//
//////////////////////////////////////////////////////

// creamos el fetching el cual se encarga de 

export const fetching_chucknorris = ( )=> ({
    type: types.FETCHING_CHUCKNORRIS_STARTED
})

 // creamos el fetched el cual se va encargar de enviarnos los parametros al momento de cargar toda la información 

 export const fetched_chucknorris = (request) => ({
    type: types.FETCHING_CHUCKNORRIS_COMPLETED,
    payload:{
        request
    }
})
// creamo la action la cual me mostrara los errores al momento de ejecutar obtener la data
export const failed_chucknorris = (error) => ({
    type: types.FETCHING_CHUCKNORRIS_FAILED,
    payload:{
        error
    }
})