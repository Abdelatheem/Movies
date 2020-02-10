import { Actions } from 'react-native-router-flux';
import axios from 'react-native-axios';
import {
  BASE_URL,
  API_KEY,
  GET_POPULER_MOIVES,
  ERROR,
  LOADING
} from './types';

export const getPopulerMovies = (page) => {
    return (dispatch) => {
        dispatch({ type: GET_POPULER_MOIVES });
        axios.get(BASE_URL + '/discover/movie?' + API_KEY + '&sort_by=popularity.desc')
        .then(result => {
            dispatch({ type: GET_POPULER_MOIVES, payload: result.data });
        })
        .catch((error) => {
            console.log(error.response);
            dispatch({ type: ERROR });
        });
    };
};