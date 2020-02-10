import {
  GET_MOIVES_GENERS,
  GET_MOIVE_DETAILS,
  LOADING,
  ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  error: '',
  loading: false,
  geners: '',
  movieDetails: '',

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, error: '', loading: true };
    case ERROR:
      return { ...state, error: 'An error occurred. Please try again.', loading: false };
    case GET_MOIVES_GENERS:
      return { ...state, loading: false, error: '', geners: action.payload };
    case GET_MOIVE_DETAILS:
      return { ...state, loading: false, error: '', movieDetails: action.payload };
    default:
      return state;
  }
};
