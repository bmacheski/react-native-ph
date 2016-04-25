import { combineReducers } from 'redux';
import products from './products';
import user from './user';
import categories from './categories';

const rootReducer = combineReducers({
  products,
  user,
  categories
});

export default rootReducer;
