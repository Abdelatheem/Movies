import {
    GET_MOIVE_DETAILS,
    LOADING,
    ERROR,
  } from '../actions/types';
  
  const INITIAL_STATE = {
    error: '',
    loading: false,
    geners: '',
    movieDetails: '',
    views: [{title: '', viewsNum: ''}],
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LOADING:
        return { ...state, error: '', loading: true };
      case ERROR:
        return { ...state, error: 'An error occurred. Please try again.', loading: false };
      case GET_MOIVE_DETAILS:
        return { ...state, loading: false, error: '', movieDetails: action.payload };
      default:
        return state;
    }
  };
  