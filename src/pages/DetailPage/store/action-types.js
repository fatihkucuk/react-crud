export const SET_ID = 'SET_ID';
export const SET_TITLE = 'SET_TITLE';
export const SET_BODY = 'SET_BODY';
export const SET_PAGE_MODE = 'SET_PAGE_MODE';

export const setId = (id) => {
  return {
    type: SET_ID,
    id,
  };
};

export const setTitle = (title) => {
  return {
    type: SET_TITLE,
    title,
  };
};

export const setBody = (body) => {
  return {
    type: SET_BODY,
    body,
  };
};

export const setPageMode = (pageMode) => {
  return {
    type: SET_PAGE_MODE,
    pageMode,
  };
};
