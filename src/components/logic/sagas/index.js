import { fork, all } from "redux-saga/effects";
import { watchChuknorris } from "./chucknorris";



function* mainSaga() {
    yield all([
        fork(watchChuknorris),
    ]);
}

export default mainSaga;