import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import List from "../components/List";
import { Provider } from "react-redux";
import Favorites from "../components/favorites";
import { PersistGate } from "redux-persist/integration/react";
import { configureStore } from "../store";
export const { store, persistor } = configureStore();
// En esta carpeta se generan las rutas de App donde el Route se encarga de asignar una ruta y elemento el cual es el componente el cual se 
// se va a mostrar 

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <PersistGate loading={null} persistor={persistor}>
                    <Routes>
                        <Route path="/lista-chucknorris" element={<List />} />
                        <Route path="/favoritos-chucknorris" element={<Favorites />} />
                    </Routes>
                </PersistGate>
            </BrowserRouter>
        </Provider>
    )
}

export default App;