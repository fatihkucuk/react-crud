import * as actionTypes from './action-types';

const initialState = {
  id: '',
  title: '',
  body: '',
  pageMode: 'Insert',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ID:
      return {
        ...state,
        id: action.id,
      };
    case actionTypes.SET_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case actionTypes.SET_BODY:
      return {
        ...state,
        body: action.body,
      };
    case actionTypes.SET_PAGE_MODE:
      return {
        ...state,
        pageMode: action.pageMode,
      };
    default:
      return state;
  }
};

export default reducer;
