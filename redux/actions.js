import * as t from './actionTypes';

// login
const setLoginState = (loginData) => {
  return {
    type: t.SET_LOGIN_STATE,
    payload: loginData,
  };
}

const setLogoutState = () =>{
  return {
    type: t.SET_LOGOUT_STATE,
  }
}