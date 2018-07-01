import { all } from 'redux-saga/effects';

import searchSaga from './search';
import selectionSaga from './selection';

export default function* rootSaga() {
  yield all([
    searchSaga(),
    selectionSaga(),
  ]);
}
