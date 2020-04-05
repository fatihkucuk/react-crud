import * as actionTypes from './action-types';

export const getItem = (id) => {
  return actionTypes.getItem(id);
};

export const setItem = (item) => {
  return actionTypes.setItem(item);
};

export const successGetItem = (item) => {
  return actionTypes.setItem(item);
};

export const postItem = (item, callback) => {
  return actionTypes.postItem(item, callback);
};

export const putItem = (item, callback) => {
  return actionTypes.putItem(item, callback);
};
