import { put, all, takeLatest } from 'redux-saga/effects';

import { setSearchText } from '../actions/formActions';
import * as actions from '../../constants/actionTypes';
// import searchSaga from './searchSaga';
// import selectionSaga from './selection';
function* saga1() {
    yield takeLatest(actions.SET_SEARCH_TEXT, setSearchText);
}

export default function* rootSaga() {
    yield all([
        saga1(),
        // searchSaga(),
        // selectionSaga(),
    ]);
}
