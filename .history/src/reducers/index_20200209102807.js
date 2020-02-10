import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import SearchReducer from './SearchReducer';
import PopulerReducer from './PopulerReducer';

export default combineReducers({
  home: HomeReducer,
  search: SearchReducer,
  populer: PopulerReducer,
});
