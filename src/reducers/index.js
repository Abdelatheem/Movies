import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import SearchReducer from './SearchReducer';
import PopulerReducer from './PopulerReducer';
import RecentReducer from './RecentReducer';
import SettingReducer from './SettingReducer';
import MoviesDetailsReducer from './MoviesDetailsReducer';

export default combineReducers({
  home: HomeReducer,
  search: SearchReducer,
  populer: PopulerReducer,
  recent: RecentReducer,
  setting: SettingReducer,
  moviesDetails: MoviesDetailsReducer
});
