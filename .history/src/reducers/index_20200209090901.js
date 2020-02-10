import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import SearchReducer from './SearchReducer';

export default combineReducers({
  home: HomeReducer,
  search: SearchReducer,
});
