import * as actionTypes from './action-types';
const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ITEMS:
      return {
        ...state,
      };
    case actionTypes.SET_ITEMS:
      return {
        ...state,
        items: action.items,
      };
    case actionTypes.DELETE_ITEM:
      return {
        ...state,
      };
    case actionTypes.SUCCESS_DELETE_ITEM:
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.id)],
      };
    default:
      return state;
  }
};

export default reducer;
