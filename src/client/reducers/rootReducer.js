import { combineReducers } from 'redux';

import setTextSearchRx from './setTextSearchRx';
import setSearchFilterRx from './setSearchFilterRx';
import setFilterCriteriaRx from './setFilterCriteriaRx';
import setLoadingStatusRx from './setLoadingStatusRx';
import loadMoviesRx from './loadMoviesRx';

const reducer = combineReducers({
    loadingStatus: setLoadingStatusRx,
    movies: loadMoviesRx,
    searchByFilter: setSearchFilterRx,
    textFromSearchField: setTextSearchRx,
    searchFilterCriteria: setFilterCriteriaRx,
});

export default reducer;
