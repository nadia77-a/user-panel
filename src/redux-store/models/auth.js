import { createActions, createReducer } from "reduxsauce";
import  Bconfig  from "config";

console.log("Bconfig",Bconfig);

const { Types, Creators } = createActions({
  setTest: ["test"],
  getData: ["param1", "param2"],
  setLanguage: ['language'],
  getLogin: ['username', 'password'],
  setUserData: ['user'],
  updateUser: ['payload'],
  logOut: [''],
  resetAuth: [],
  getMovimenti:["from","to","filter"],
  setMovimenti:['movimenti'],
  getReportSport:["from","to"],
  setReportSport:['reportSport'],
  getUserList:[],
  setUserList:['userList'],
});

export const AuthTypes = Types;
export default Creators;

const INITIAL_STATE = {
  test: "test",
  language:
  localStorage.getItem('language') || Object.keys(Bconfig['languages'])[0],
  user: JSON.parse(localStorage.getItem('user')) || null,
  movimenti:[],
  reportSport:[],
  userList:[]
};
export const reducer = createReducer(INITIAL_STATE, {
  SET_TEST: (state, { test }) => ({
    ...state,
    test,
  }),
  SET_LANGUAGE: (state, { language }) => ({
    ...state,
    language,
  }),
  RESET_AUTH: (state, action) => ({
    ...INITIAL_STATE,
    user: null,
  }),
  SET_USER_DATA: (state, { user }) => ({
    ...state,
    user,
  }),
  UPDATE_USER: (state, { payload }) => {
    let user = state.user;

    user.balance = payload.balance;
    user.currency = payload.currency;

    window.localStorage.setItem('user', JSON.stringify(user));

    return {
      ...state,
      user: { ...user },
    };
  },
  SET_MOVIMENTI: (state, { movimenti }) => ({
    ...state,
    movimenti,
  }),
  SET_REPORT_SPORT: (state, { reportSport }) => ({
    ...state,
    reportSport,
  }),
  SET_USER_LIST: (state, { userList }) => ({
    ...state,
    userList,
  }),
});
