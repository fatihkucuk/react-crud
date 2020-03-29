import * as actionTypes from './action-types';
const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ITEMS:
      return {
        ...state,
        items: action.items,
      };
    default:
      return state;
  }
};

export default reducer;
