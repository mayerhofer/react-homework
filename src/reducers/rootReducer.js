import { combineReducers } from 'redux';

import movie from './movie';
import search from './search';
import setTextSearchRx from './setTextSearchRx';
import setSearchFilterRx from './setSearchFilterRx';
import setFilterCriteriaRx from './setFilterCriteriaRx';

const reducer = combineReducers({
    movies: movie,
    searchByFilter: setSearchFilterRx,
    textFromSearchField: setTextSearchRx,
    searchFilterCriteria: setFilterCriteriaRx,
});

export default reducer;
