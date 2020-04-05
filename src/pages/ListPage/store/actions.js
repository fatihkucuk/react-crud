import * as actionTypes from './action-types';

export const successGetItems = (items) => {
  return actionTypes.setItems(items);
};

export const successDeleteItem = (id) => {
  return actionTypes.successDeleteItem(id);
};
