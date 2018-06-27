import { combineReducers } from 'redux';

import movie from './movie';
import search from './search';

const reducer = combineReducers({
    movie,
    search,
});

export default reducer;
