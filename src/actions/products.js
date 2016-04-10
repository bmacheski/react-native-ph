import secrets from '../../secrets';
import * as types from '../constants/actionTypes';

function requestProducts(query) {
  return {
    type: types.request_songs,
    query
  }
}

function receiveProducts(products) {
  return {
    type: types.receive_products,
    products
  }
}

function receiveUserData(token) {
  return {
    type: types.receive_user_data,
    token
  }
}

export function handleToken() {
  let authObj = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Host': 'api.producthunt.com',
      'Origin': ''
    },
    body: JSON.stringify({
     'client_id': secrets.apiKey,
      'client_secret': secrets.apiSecret,
      'grant_type': 'client_credentials'
    })
  }

  return dispatch => {
    return fetch('https://api.producthunt.com/v1/oauth/token', authObj)
    .then(res => res.json())
    .then(json => dispatch(receiveUserData(json)))
  }
}
