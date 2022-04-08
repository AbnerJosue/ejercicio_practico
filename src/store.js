import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducer from "./components/logic/reducer";
import mainSaga from "./components/logic/sagas";

// en esta parte creamos el store de nuestro proyecto haciendo enfasis 
// de lo que vamos a usar 
// utilizando nuestro reducer y nuestro mainSaga
// y las librerias de redux


export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const persistedReducer = persistReducer(
    {
      key: "root",
      storage,
      whitelist: ["auth"],
    },
    reducer
  );

  let composeEnhancers = compose;

  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = composeEnhancers(
    applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware)
  )(createStore)(persistedReducer);

  const persistor = persistStore(store);

  sagaMiddleware.run(mainSaga);

  return { store, persistor };
};