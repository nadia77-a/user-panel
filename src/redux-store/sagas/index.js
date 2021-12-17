import { takeLatest, all } from "redux-saga/effects";

import * as AuthGenerators from "./AuthSagas";
// import * as MainGenerators from "./MainSagas";

export default function* rootSaga() {
  yield all([
    // AUTH
    ...[takeLatest("GET_DATA", AuthGenerators.getData)],
    takeLatest('GET_LOGIN', AuthGenerators.getLogin),
    takeLatest('LOG_OUT', AuthGenerators.logOut),
    takeLatest('GET_MOVIMENTI', AuthGenerators.getMovimenti),
    takeLatest('GET_REPORT_SPORT', AuthGenerators.getReportSport),
    takeLatest('GET_USER_LIST', AuthGenerators.getUserList),
    // MAIN
  ]);
}
