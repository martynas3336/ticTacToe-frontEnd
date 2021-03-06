import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';

import tiles from './reducer/tiles';
import logs from './reducer/logs';

const enhancer = compose(
  applyMiddleware(thunk),
  persistState(),
)

const combinedReducers = combineReducers({tiles, logs});
const store = createStore(combinedReducers, enhancer);

export default store;
