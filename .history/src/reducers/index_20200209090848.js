import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import SearchReducer from './HomeReducer';

export default combineReducers({
  home: HomeReducer,
});
