import * as actionTypes from './action-types';

const initialState = {
  item: {
    id: '',
    title: '',
    body: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ITEM:
      return {
        ...state,
        item: action.item,
      };
    case actionTypes.GET_ITEM:
      return {
        ...state,
      };
    case actionTypes.SUCCESS_GET_ITEM:
      return {
        ...state,
        item: { ...action.item },
      };
    case actionTypes.POST_ITEM:
      return {
        ...state,
      };
    case actionTypes.PUT_ITEM:
      return {
        ...state,
      };
    case actionTypes.SUCCESS_POST_ITEM:
      return {
        ...state,
        item: { ...action.item },
      };
    case actionTypes.SUCCESS_PUT_ITEM:
      return {
        ...state,
        item: { ...action.item },
      };
    default:
      return state;
  }
};

export default reducer;
