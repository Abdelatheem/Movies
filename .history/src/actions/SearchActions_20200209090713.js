import { Actions } from 'react-native-router-flux';
import axios from 'react-native-axios';
import {
  BASE_URL,
  API_KEY,
  GET_MOIVES_BY_NAME,
  ERROR,
} from './types';

export const getMoviesByName = (name) => {
  return (dispatch) => {
    dispatch({ type: GET_MOIVES_BY_NAME });
    axios.get(BASE_URL + '/search/movie?' + API_KEY + '&query='+name)
      .then(result => {
        dispatch({ type: GET_MOIVES_BY_NAME, payload: result.data });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({ type: ERROR });
      });
  };
};