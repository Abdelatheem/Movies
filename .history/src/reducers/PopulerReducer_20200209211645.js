import {
    GET_POPULER_MOIVES,
    LOADING,
    ERROR,
  } from '../actions/types';
  
  const INITIAL_STATE = {
    error: '',
    loading: false,
    moviesResults: [],
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LOADING:
        return { ...state, error: '', loading: true };
      case ERROR:
        return { ...state, error: 'An error occurred. Please try again.', loading: false };
      case GET_POPULER_MOIVES:
        return { ...state, loading: false, error: '', moviesResults: action.payload };
      default:
        return state;
    }
  };
  