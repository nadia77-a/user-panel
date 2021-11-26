import { put, call, select } from "redux-saga/effects";
import AuthActions from "../models/auth";

import * as AuthReq from "services/auth";
import { t } from '@lingui/macro';
import  { notifyError,notifySucces }  from 'utils';


const loginErrorCodes = {
  'user-not-found': t`Username does not exist!!`,
  'wrong-password': t`Password is not correct!!`,
  default: t`Could not get you logged in! Please try again.`,
};

export function* getLogin({ username, password }) {

  let response = yield call(AuthReq.getLogin, username, password);

  if (response) {
    if (response.result) {
      response.balance = JSON.parse(response.balance);

      localStorage.setItem('user', JSON.stringify(response));
      yield put(AuthActions.setUserData(response));
      notifySucces(t`Successfully logged in!!`);
    } else {
      notifyError(loginErrorCodes[response.msg] || loginErrorCodes['default']);
    }
  }
}


export function* logOut() {
  const user = yield select(state => state.auth.user);
  yield call(AuthReq.requestLogOut, user.token);

  window.localStorage.removeItem('user');
  yield put(AuthActions.resetAuth());

}


export function* getMovimenti({ from, to,filter }) {

  const user = yield select(state => state.auth.user);
  const response = yield call(AuthReq.getMovimenti, from, to,filter, user.token);

  if (response) {

    yield put(AuthActions.setMovimenti(response));
  }
}

export function* getReportSport({ from, to}) {

  const user = yield select(state => state.auth.user);
  const response = yield call(AuthReq.getReportSport, from, to, user.token);

  if (response) {

    yield put(AuthActions.setReportSport(response));
  }
}

export function* getData({ param1, param2 }) {

  const response = yield call(AuthReq.getDataReq, param1, param2);
  const testData = yield select((state) => state.auth.test);

  if (response) {

    yield put(AuthActions.setTest({ response, testData }));
  }
}
