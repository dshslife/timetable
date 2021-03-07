import {setLoginState, setLogoutState} from '../redux/actions';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const login = (loginInput) => {
  const { name, number } = loginInput;
  return (dispatch) => {
    dispatch(setLoginState({number: number, name: name}));
    Alert.alert("로그인 성공");
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch(setLogoutState());
  }
}

export const setLoginLocal = async (loginData) => {
  try{
    await AsyncStorage.setItem('loginData', JSON.stringify(loginData));
  } catch (err) {
    console.log(err);
  }
}