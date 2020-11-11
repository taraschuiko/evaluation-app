import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  typeof window !== 'undefined' ? compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ) : applyMiddleware(thunk),
);
/* eslint-enable */

export default store;
