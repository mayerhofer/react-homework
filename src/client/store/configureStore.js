import { applyMiddleware, createStore, compose } from 'redux';
import { REHYDRATE, PURGE, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware, {END} from 'redux-saga';

import rootReducer from "../reducers/rootReducer";
import sagas from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware();
const config = {
    key: 'primary',
    storage,
    whitelist: ['movies']
}
let reducer = persistReducer(config, rootReducer);

const configureStore = () => {
    const store = createStore(reducer, undefined, compose(applyMiddleware(sagaMiddleware), ));
    const persistor = persistStore(store, null, () => { store.getState() });

    store.runSaga = () => sagaMiddleware.run(sagas);
    store.close = () => store.dispatch(END);

    store.runSaga();

    return { store, persistor };
}

export default configureStore;
