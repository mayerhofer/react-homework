import { combineReducers } from 'redux';

import setFilterCriteria from './formRx';
import setLoadingStatusRx from './setLoadingStatusRx';
import loadMoviesRx from './loadMoviesRx';
import setLoadingErrorRx from './setLoadingErrorRx';

const reducer = combineReducers({
    loadingStatus: setLoadingStatusRx,
    movies: loadMoviesRx,
    searchFilterCriteria: setFilterCriteria,
    loadingErrorMessage: setLoadingErrorRx,
});

export default reducer;
