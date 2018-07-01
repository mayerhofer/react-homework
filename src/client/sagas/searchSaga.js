import { put, call, all, takeLatest } from 'redux-saga/effects';

import { request } from '../helpers/request';

import { SET_SEARCH_FILTER, SET_SEARCH_TEXT, SET_SEARCH_RESULTS_CRITERIA } from '../../constants/actionTypes';
import { startLoading, stopLoading, showError } from '../actions/state';
import { setSearchTerm } from '../actions/form';
import { showResults } from '../actions/search';

export function* doSearch({ payload: { searchTerm, searchBy, sortBy } }) {
  yield put(startLoading());

  const params = {
    search: searchTerm,
    searchBy,
    sortBy,
    sortOrder: 'asc',
  };

  try {
    const response = yield call(request, 'movies', params);

    yield put(showResults(response.data));
  } catch (error) {
    yield put(showError(error.message));
  } finally {
    yield put(stopLoading());
  }
}

function* search(action) {
  const { payload: { searchTerm } } = action;

  yield put(setSearchTerm(searchTerm));

  yield doSearch(action);
}

function* doSearchSaga() {
  yield takeLatest(DO_SEARCH, doSearch);
}

function* searchSaga() {
  yield takeLatest(SEARCH, search);
}

export default function* rootSaga() {
  yield all([
    doSearchSaga(),
    searchSaga(),
  ]);
}
