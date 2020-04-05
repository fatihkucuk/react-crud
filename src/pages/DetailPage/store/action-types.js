export const SET_ITEM = 'SET_ITEM';
export const SET_ID = 'SET_ID';
export const SET_TITLE = 'SET_TITLE';
export const SET_BODY = 'SET_BODY';
export const SET_PAGE_MODE = 'SET_PAGE_MODE';
export const GET_ITEM = 'GET_ITEM';
export const SUCCESS_GET_ITEM = 'SUCCESS_GET_ITEM';
export const POST_ITEM = 'POST_ITEM';
export const SUCCESS_POST_ITEM = 'SUCCESS_POST_ITEM';
export const PUT_ITEM = 'PUT_ITEM';
export const SUCCESS_PUT_ITEM = 'SUCCESS_POST_ITEM';

export const setItem = (item) => {
  return {
    type: SET_ITEM,
    item: { ...item },
  };
};

export const getItem = (id) => {
  return {
    type: GET_ITEM,
    id,
  };
};

export const postItem = (item, callback) => {
  return {
    type: POST_ITEM,
    item,
    callback,
  };
};

export const putItem = (item, callback) => {
  return {
    type: PUT_ITEM,
    item,
    callback,
  };
};

export const successGetItem = (item) => {
  return {
    type: SUCCESS_GET_ITEM,
    item,
  };
};

export const successPost = (item) => {
  return {
    type: SUCCESS_POST_ITEM,
    item,
  };
};

export const successPut = (item) => {
  return {
    type: SUCCESS_PUT_ITEM,
    item,
  };
};
