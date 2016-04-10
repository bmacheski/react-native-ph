import * as types from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  products: []
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
        products: [...state.products, ...action.products],
      });

    default:
      return state;
  }
};

export default products;
