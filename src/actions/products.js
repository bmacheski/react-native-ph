import * as types from '../constants/actionTypes';

function requestProducts(category) {
  return {
    type: types.request_products,
    category
  }
}

function receiveProducts(products, category) {
  return {
    type: types.receive_products,
    products,
    category
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

export function fetchProducts(data, cat) {
  let header = config(data.token);
  let prodObj = {
    method: 'GET',
    headers: header
  };

  return dispatch => {
    let category = cat ? cat : 'tech';
    let url = cat
      ? `https://api.producthunt.com/v1/categories/${category}/posts`
      : 'https://api.producthunt.com/v1/posts'

    dispatch(requestProducts(category));
    return fetch(url, prodObj)
      .then(res => res.json())
      .then(json =>  {
        dispatch(receiveProducts(json, category));
      })
  }
}
