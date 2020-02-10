import { Actions } from 'react-native-router-flux';
import axios from 'react-native-axios';
import {
  BASE_URL,
  API_KEY,
  GET_MOIVES_GENERS,
  GET_GENER_DETAILS,
  ERROR,
} from './types';

export const getMovieGeners = () => {
  return (dispatch) => {
    dispatch({ type: GET_MOIVES_GENERS });
    axios.get(BASE_URL + '/genre/movie/list?' + API_KEY)
      .then(result => {
        dispatch({ type: GET_MOIVES_GENERS, payload: result.data });
        Actions.Home();
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({ type: ERROR });
      });
  };
};

export const renderGenerDetail = (id, page) => {
  return (dispatch) => {
    dispatch({ type: GET_GENER_DETAILS });
    axios.get(BASE_URL + '/genre/movie/list?' + API_KEY)
      .then(result => {
        dispatch({ type: GET_GENER_DETAILS, payload: result.data });
        Actions.GenerDetails();
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({ type: ERROR });
      });
  };
};