import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState) => {
    try {
        const store = createStore(
            rootReducer,
            initialState,
            compose(applyMiddleware(sagaMiddleware)),
        );

        store.runSaga = () => sagaMiddleware.run(rootSaga);
        store.close = () => store.dispatch(END);

        store.runSaga();

        return store;
    } catch (ex) {
        console.log(ex.message);
        return {};
    }
};

export default configureStore;
