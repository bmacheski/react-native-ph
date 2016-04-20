import * as types from '../constants/actionTypes';

const initialState = {
  items: []
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case types.receive_categories:
      return Object.assign({}, state, {
        items: [...state.items, ...action.categories.categories],
      });

    default:
      return state;
  }
};

export default categories;
