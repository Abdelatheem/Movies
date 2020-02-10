import { Actions } from 'react-native-router-flux';
import axios from 'react-native-axios';
import {
  BASE_URL,
  API_KEY,
  CHANGE_DIRECTIONS,
  CHANGE_MODE,
  ERROR,
  LOADING
} from './types';

export const changeDirections = (value) => {
    return (dispatch) => { dispatch({ type: CHANGE_DIRECTIONS, payload: value });};
};

export const changeMode = (value) => {
    return (dispatch) => { dispatch({ type: CHANGE_MODE, payload: value });};
};