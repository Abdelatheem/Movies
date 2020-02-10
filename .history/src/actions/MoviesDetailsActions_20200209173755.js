import { Actions } from 'react-native-router-flux';
import axios from 'react-native-axios';
import {
  BASE_URL,
  API_KEY,
  GET_MOIVE_DETAILS,
  ERROR,
} from './types';

export const renderMovieDetail = (id, poster) => {
  return (dispatch) => {
    dispatch({ type: GET_MOIVE_DETAILS });
    axios.get(BASE_URL + `/movie/${id}?` + API_KEY)
      .then(result => {
        dispatch({ type: GET_MOIVE_DETAILS, payload: result.data });
        Actions.MovieDetailScreen({poster: poster});
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({ type: ERROR });
      });
  };
};
