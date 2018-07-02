import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from '../reducers/rootReducer';
import sagas from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const store = createStore(rootReducer, undefined, compose(applyMiddleware(sagaMiddleware)));

    store.runSaga = () => sagaMiddleware.run(sagas);
    store.close = () => store.dispatch(END);

    store.runSaga();

    return store;
};

export default configureStore;
