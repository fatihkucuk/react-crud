import rootReducer from './reducers';
import { combineReducers } from 'redux';
import listPageReducer from '../pages/ListPage/store/reducers';
import detailPageReducer from '../pages/DetailPage/store/reducers';

export const combinedReducers = combineReducers({
  rootReducer,
  listPageReducer,
  detailPageReducer,
});
