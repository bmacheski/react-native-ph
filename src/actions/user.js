import secrets from '../../secrets';
import * as types from '../constants/actionTypes';
import { fetchProducts } from './products';
import { fetchCategories } from './categories';

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
    .then(json => {
      let data = { token: json.access_token };

      dispatch(receiveUserData(data));
      dispatch(fetchProducts(data));
      dispatch(fetchCategories(data));
    })
  }
}
