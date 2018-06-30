import { applyMiddleware, createStore, compose } from 'redux';
import { REHYDRATE, PURGE, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from "../reducers/rootReducer";

const middlewares = [thunk];
const config = {
    key: 'primary',
    storage,
    whitelist: ['movies']
}
let reducer = persistReducer(config, rootReducer);

const configureStore = () => {
    const store = createStore(reducer, undefined, compose(applyMiddleware( ... middlewares), ));
    const persistor = persistStore(store, null, () => { store.getState() });
    return { store, persistor };
}

export default configureStore;
