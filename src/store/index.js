import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger()
)(createStore);

const configureStore = function (initialState = {}) {
  return createStoreWithMiddleware(rootReducer, initialState);
};

export default configureStore;
