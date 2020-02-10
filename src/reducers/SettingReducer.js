import {
    CHANGE_DIRECTIONS,
    CHANGE_MODE,
    LOADING,
    ERROR,
  } from '../actions/types';
  
  const INITIAL_STATE = {
    error: '',
    loading: false,
    Directions: 'LTR',
    Mode: 'Dark',
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LOADING:
        return { ...state, error: '', loading: true };
      case ERROR:
        return { ...state, error: 'An error occurred. Please try again.', loading: false };
      case CHANGE_DIRECTIONS:
        return { ...state, loading: false, error: '', Directions: action.payload };
      case CHANGE_MODE:
        return { ...state, loading: false, error: '', Mode: action.payload };
      default:
        return state;
    }
  };
  