import {
  GET_MOIVES_GENERS,
  GET_MOIVES_BY_GENER,
  LOADING,
  ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  error: '',
  loading: false,
  geners: '',
  generMovies: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ERROR:
      return { ...state, error: 'An error occurred. Please try again.', loading: false };
    case GET_MOIVES_GENERS:
      return { ...state, loading: false, error: '', geners: action.payload };
    case GET_MOIVES_BY_GENER:
      console.log(action.payload)
      return { ...state, loading: false, error: '', generMovies: action.payload };
    // case GOT_PROFILE_PICTURE:
    //   return { ...state, loading: false, error: '', picture: action.payload };
    // case PROFILE_PICTURE_ERROR:
    //   return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
