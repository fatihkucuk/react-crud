import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from './action-types';
import { setLoading } from '../../../store/action-types';
import { apiEndpoint } from '../../../constants';
function* getItem({ id }) {
  yield put(setLoading(true));
  try {
    const response = yield call(axios.get, `${apiEndpoint}/${id}`);
    yield put(actionTypes.successGetItem(response.data));
  } catch (error) {
    alert(error); //For just demo purpose
  } finally {
    yield put(setLoading(false));
  }
}

function* postItem({ item, callback }) {
  yield put(setLoading(true));
  try {
    const response = yield call(axios.post, apiEndpoint, item);
    yield put(actionTypes.successPost(response.data));
    callback();
  } catch (error) {
    alert(error); //For just demo purpose
  } finally {
    yield put(setLoading(false));
  }
}

function* putItem({ item, callback }) {
  yield put(setLoading(true));
  try {
    const response = yield call(axios.put, `${apiEndpoint}/${item.id}`, item);
    yield put(actionTypes.successPut(response.data));
    callback();
  } catch (error) {
    alert(error); //For just demo purpose
  } finally {
    yield put(setLoading(false));
  }
}

export default function* detailPageServices() {
  yield takeLatest(actionTypes.GET_ITEM, getItem);
  yield takeLatest(actionTypes.POST_ITEM, postItem);
  yield takeLatest(actionTypes.PUT_ITEM, putItem);
}
