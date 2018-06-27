import { applyMiddleware, createStore, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';

import rootReducer from "../reducers/rootReducer";

const middlewares = [];

const store = createStore(rootReducer, undefined, compose(applyMiddleware( ... middlewares), autoRehydrate()));

export default store;
