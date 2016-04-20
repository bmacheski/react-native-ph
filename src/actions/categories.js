import * as types from '../constants/actionTypes';

function config(token) {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Host': 'api.producthunt.com',
    'Authorization': 'Bearer ' + token
  }
}

function receiveCategories(categories) {
  return {
    type: types.receive_categories,
    categories
  }
}

export function fetchCategories(data) {
  let header = config(data.token);
  let prodObj = {
    method: 'GET',
    headers: header
  }

  return dispatch => {
    return fetch('https://api.producthunt.com/v1/categories', prodObj)
    .then(res => res.json())
    .then(json =>  {
      dispatch(receiveCategories(json))
    })
  }
}
