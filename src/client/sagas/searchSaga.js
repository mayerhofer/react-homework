import {
    put, call, all, takeLatest,
} from 'redux-saga/effects';

import { request } from '../../servers/movieSvc';

import * as actions from '../../constants/actionTypes';
import { setLoadingMoviesStatus, moviesLoadingError, loadMoviesSuccess } from '../actions/loadMovies';
import { setSearchText } from '../actions/formActions';

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
        yield put(moviesLoadingError(error.message));
    } finally {
        yield put(setLoadingMoviesStatus('success'));
    }
}

function* search(action) {
    const { payload: { searchTerm } } = action;

    yield put(setSearchText(searchTerm));

    yield doSearch(action);
}

function* doSearchSaga() {
    yield takeLatest(actions.SET_SEARCH_RESULTS_CRITERIA, doSearch);
}

function* searchSaga() {
    yield takeLatest(actions.APPLY_SEARCH, search);
}

export default function* rootSaga() {
    yield all([
        doSearchSaga(),
        searchSaga(),
    ]);
}
