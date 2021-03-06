import {
  GET_MOIVES_GENERS,
  ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  error: '',
  loading: false,
  geners: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MOIVES_GENERS:
      console.log('GET_MOIVES_GENERS');
      console.log(action.payload);
      return { ...state, loading: false, error: '', geners: action.payload. };
    case ERROR:
      return { ...state, error: 'An error occurred. Please try again.', loading: false };
    // case SETTING_FOLLOW_STATUS:
    //   console.log('follow status: ' + action.payload);
    //   return { ...state, loading: false, error: '', follow: action.payload };
    // case GOT_PROFILE_PICTURE:
    //   return { ...state, loading: false, error: '', picture: action.payload };
    // case PROFILE_PICTURE_ERROR:
    //   return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
