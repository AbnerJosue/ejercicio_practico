import axios from "axios";


// creamos la fuction asincrona y ejecutamos axios para nuestro metodo http el cual 
// nos dara lo necesarios 

export const servicesChockNorris = async () => {
    try {
        // de lado de la function creo una function con un for para recorrer 15 veces
        // y obtener 15 veces a los chucknorris
        let arr=[];
        for(let i = 0; i <=15; i++){
            let config = {
                method: 'get',
                url: 'https://api.chucknorris.io/jokes/random'
            }
    
            let response = await axios(config);
            arr.push(response.data);
        }

        console.info('-----> obtener toda la data', arr);
        
        return{
            data: arr,
            error: null
        }
    } catch (error) {   
        return{
            data: null,
            error: error.message
        }
    }
};