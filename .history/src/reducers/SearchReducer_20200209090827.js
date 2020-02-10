import {
    GET_MOIVES_BY_NAME,
    LOADING,
    ERROR,
  } from '../actions/types';
  
  const INITIAL_STATE = {
    error: '',
    loading: false,
    searchReults: '',
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LOADING:
        return { ...state, error: '', loading: true };
      case ERROR:
        return { ...state, error: 'An error occurred. Please try again.', loading: false };
      case GET_MOIVES_BY_NAME:
        return { ...state, loading: false, error: '', geners: action.payload };
      default:
        return state;
    }
  };
  