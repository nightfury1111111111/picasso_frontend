import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';

import rootReducer from '../reducers/index';

// const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  compose(composeWithDevTools(applyMiddleware(thunkMiddleware)))
);
