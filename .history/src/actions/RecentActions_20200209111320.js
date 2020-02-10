import { Actions } from 'react-native-router-flux';
import axios from 'react-native-axios';
import {
  BASE_URL,
  API_KEY,
  GET_RECENT_MOIVES,
  ERROR,
  LOADING
} from './types';

export const getRecentMovies = () => {
    return (dispatch) => {
        dispatch({ type: GET_POPULER_MOIVES });
        axios.get(BASE_URL + '/discover/movie?' + API_KEY + '&sort_by=release_date.desc')
        .then(result => {
            dispatch({ type: GET_POPULER_MOIVES, payload: result.data });
        })
        .catch((error) => {
            console.log(error.response);
            dispatch({ type: ERROR });
        });
    };
};