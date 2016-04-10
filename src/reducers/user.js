import * as types from '../constants/actionTypes';

const user = (state = {}, action) => {
  switch (action.type) {
    case types.receive_user_data:
      return Object.assign({}, state, {
        token: action.token
      });

    default:
      return state;
  }
};

export default user;
