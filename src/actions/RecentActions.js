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
    var today = new Date();
    var day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate()
    var month = parseInt(today.getMonth()+1) < 10 ? '0' + parseInt(today.getMonth()+1) : parseInt(today.getMonth()+1)
    var year = today.getFullYear();
    var fullDate = year + '-' + month + '-' + day;
    console.log(fullDate)
    return (dispatch) => {
        dispatch({ type: GET_RECENT_MOIVES });
        axios.get(BASE_URL + '/discover/movie?' + API_KEY + '&sort_by=release_date.desc&release_date.lte='+fullDate)
        .then(result => {
            dispatch({ type: GET_RECENT_MOIVES, payload: result.data });
        })
        .catch((error) => {
            console.log(error.response);
            dispatch({ type: ERROR });
        });
    };
};