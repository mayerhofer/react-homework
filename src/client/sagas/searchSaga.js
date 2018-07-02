import {
    put, call, all, takeLatest,
} from 'redux-saga/effects';

import { request } from '../../servers/movieSvc';

import * as actions from '../../constants/actionTypes';
import { setLoadingMoviesStatus, moviesLoadingError, loadMoviesSuccess } from '../actions/loadMovies';

export function* doSearch({ payload: { text, searchBy, sortBy } }) {
    yield put(setLoadingMoviesStatus('started'));

    const params = {
        search: text,
        searchBy,
        sortBy,
        sortOrder: 'asc',
    };

    try {
        const response = yield call(request, 'movies', params);

        yield put(loadMoviesSuccess(response.data));
    } catch (error) {
        console.log(error.message);
        yield put(moviesLoadingError(error.message));
    } finally {
        yield put(setLoadingMoviesStatus('success'));
    }
}

function* doSearchSaga() {
    try {
        yield takeLatest(actions.APPLY_SEARCH, doSearch);
    } catch (error) {
        console.log(error.message);
    }
}

export default function* rootSaga() {
    yield all([
        doSearchSaga(),
    ]);
}
