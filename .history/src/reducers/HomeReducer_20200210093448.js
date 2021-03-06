import {
  GET_MOIVES_GENERS,
  GET_GENER_DETAILS,
  LOADING,
  ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  error: '',
  loading: false,
  geners: '',
  generDetails: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, error: '', loading: true };
    case ERROR:
      return { ...state, error: 'An error occurred. Please try again.', loading: false };
    case GET_MOIVES_GENERS:
      return { ...state, loading: false, error: '', geners: action.payload };
    case GET_GENER_DETAILS:
      return { ...state, loading: false, error: '', id: action.payload.id ,generDetails: [...state.generDetails, action.payload] };
    default:
      return state;
  }
};
