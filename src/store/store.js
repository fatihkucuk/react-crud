import rootReducer from './reducer';
import { combineReducers } from 'redux';
import listPageReducer from '../pages/ListPage/store/reducer';
import detailPageReducer from '../pages/DetailPage/store/reducer';

export const combinedReducers = combineReducers({
  rootReducer,
  listPageReducer,
  detailPageReducer,
});
