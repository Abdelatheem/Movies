import {
  GETTING_USER_INFO,
  GOT_USER_INFO,
  USER_ERROR,
  SETTING_FOLLOW_STATUS,
  GOT_PROFILE_PICTURE,
  PROFILE_PICTURE_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  error: '',
  loading: false,
  user: '',
  follow: false,
  picture: '',
};

export default (state = INITIAL_STATE, action) => {
  //console.log(action);
  switch (action.type) {
    case GETTING_USER_INFO:
      return { ...state, loading: true, error: '' };
    case GOT_USER_INFO:
      return { ...state, loading: false, error: '', user: action.payload, follow: action.payload.follow };
    case USER_ERROR:
      return { ...state, error: 'An error occurred. Please try again.', loading: false };
    case SETTING_FOLLOW_STATUS:
      console.log('follow status: ' + action.payload);
      return { ...state, loading: false, error: '', follow: action.payload };
    case GOT_PROFILE_PICTURE:
      return { ...state, loading: false, error: '', picture: action.payload };
    case PROFILE_PICTURE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
