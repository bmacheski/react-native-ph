import * as types from '../constants/actionTypes';

function requestProducts() {
  return {
    type: types.request_products
  }
}

function receiveProducts(products) {
  return {
    type: types.receive_products,
    products
  }
}

function config(token) {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Host': 'api.producthunt.com',
    'Authorization': 'Bearer ' + token
  }
}

export function fetchProducts(data) {
  let header = config(data.token);
  let prodObj = {
    method: 'GET',
    headers: header
  }

  return dispatch => {
    dispatch(requestProducts())
    return fetch('https://api.producthunt.com/v1/posts', prodObj)
    .then(res => res.json())
    .then(json =>  {
      dispatch(receiveProducts(json))
    })
  }
}
