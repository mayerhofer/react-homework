import { all } from 'redux-saga/effects';

import searchSaga from './searchSaga';
// import selectionSaga from './selection';

export default function* rootSaga() {
    yield all([
        searchSaga(),
    // selectionSaga(),
    ]);
}
