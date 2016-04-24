import * as types from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  items: []
};

function product(state = initialState, action) {
  switch (action.type) {
    case types.receive_products:
      return Object.assign({}, state, {
        isFetching: true,
        items: [...state.items, ...action.products.posts]
      });

    case types.request_products:
      return Object.assign({}, state, {
        isFetching: false
      });

    default:
      return state
  }
}

const products = (state = {}, action) => {
  switch (action.type) {
    case types.request_products:
      return Object.assign({}, state, {
        currentCategory: action.category,
        [action.category]: product(state[action.category], action)
      });

    case types.receive_products:
      return Object.assign({}, state, {
        currentCategory: action.category,
        [action.category]: product(state[action.category], action)
      });

    default:
      return state;
  }
};

export default products;
