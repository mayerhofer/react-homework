import { combineReducers } from 'redux';

import setTextSearchRx from './setTextSearchRx';
import setSearchFilterRx from './setSearchFilterRx';
import { setFilterCriteriaRx, searchRx } from './setFilterCriteriaRx';
import setLoadingStatusRx from './setLoadingStatusRx';
import loadMoviesRx from './loadMoviesRx';
import setLoadingErrorRx from './setLoadingErrorRx';

const reducer = combineReducers({
    loadingStatus: setLoadingStatusRx,
    movies: loadMoviesRx,
    searchByFilter: setSearchFilterRx,
    textFromSearchField: setTextSearchRx,
    searchFilterCriteria: setFilterCriteriaRx,
    search: searchRx,
    loadingErrorMessage: setLoadingErrorRx,
});

export default reducer;
