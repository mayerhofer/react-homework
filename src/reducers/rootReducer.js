import { combineReducers } from 'redux';

import movie from './movie';
import search from './search';
import setTextSearchRx from './setTextSearchRx';

const reducer = combineReducers({
    movie,
    search,
    setTextSearchRx,
});

export default reducer;
