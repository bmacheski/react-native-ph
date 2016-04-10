import * as types from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  items: []
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.request_products:
      return Object.assign({}, state, {
        isFetching: true
      });

    case types.receive_products:
      return Object.assign({}, state, {
        isFetching: false,
        items: [...state.items, ...action.products.posts],
      });

    default:
      return state;
  }
};

export default products;
