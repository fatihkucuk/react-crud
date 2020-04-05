import { takeLatest, put, call } from 'redux-saga/effects';
import * as actionTypes from './action-types';
import { successGetItems, successDeleteItem } from './actions';
import { setLoading } from '../../../store/actions';
import axios from 'axios';
import { apiEndpoint } from '../../../constants';

export function* getItems(action) {
  yield put(setLoading(true));
  try {
    const response = yield call(axios.get, apiEndpoint);
    yield put(successGetItems(response.data));
  } catch (error) {
    alert(error); //For just demo purpose
  } finally {
    yield put(setLoading(false));
  }
}

export function* deleteItem(action) {
  yield put(setLoading(true));
  try {
    yield call(axios.delete, `${apiEndpoint}/${action.id}`);
    yield put(successDeleteItem(action.id));
  } catch (error) {
    yield alert(error); //For just demo purpose
  } finally {
    yield put(setLoading(false));
  }
}

export default function* listPageServices() {
  yield takeLatest(actionTypes.GET_ITEMS, getItems);
  yield takeLatest(actionTypes.DELETE_ITEM, deleteItem);
}
