import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';

import tiles from './reducer/tiles';

const enhancer = compose(
  applyMiddleware(thunk),
  persistState(),
)

const combinedReducers = combineReducers({tiles});
const store = createStore(combinedReducers, enhancer);

console.log(store);

export default store;
