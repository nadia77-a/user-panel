import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({
  setTest: ["test"],
  getData: ["param1", "param2"],
  getLogin: ['username', 'password'],
  setUserData: ['user'],
  updateUser: ['payload'],
  logOut: [''],
  resetAuth: [],
  getMovimenti:["from","to","filter"],
  setMovimenti:['movimenti']
});

export const AuthTypes = Types;
export default Creators;

const INITIAL_STATE = {
  test: "test",
  user: JSON.parse(localStorage.getItem('user')) || null,
  movimenti:[]
};
export const reducer = createReducer(INITIAL_STATE, {
  SET_TEST: (state, { test }) => ({
    ...state,
    test,
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
});
