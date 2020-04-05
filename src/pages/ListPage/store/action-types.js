export const SET_ITEMS = 'SET_ITEMS';
export const GET_ITEMS = 'GET_ITEMS';
export const DELETE_ITEM = 'DELETE_ITEM';
export const SUCCESS_DELETE_ITEM = 'SUCCESS_DELETE_ITEM';

export const getItems = () => {
  return {
    type: GET_ITEMS,
  };
};

export const setItems = (items) => {
  return {
    type: SET_ITEMS,
    items,
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id,
  };
};

export const successDeleteItem = (id) => {
  return {
    type: SUCCESS_DELETE_ITEM,
    id,
  };
};
