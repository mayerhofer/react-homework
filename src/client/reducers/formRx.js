import { Map } from 'immutable';

import * as types from '../../constants/actionTypes';
import * as filters from '../../constants/filters';

const initialState = Map({
    text: '',
    searchBy: filters.SEARCH_BY_TITLE,
    sortBy: 'vote_average',
});

const setSearchCriteriaRx = (state = initialState, action) => {
    switch (action.type) {
    case types.SET_SEARCH_TEXT:
        return state.set('text', action.value);
    case types.SET_SEARCH_FILTER:
        return state.set('searchBy', action.value);
    case types.SET_SEARCH_SORT:
        return state.set('sortBy', action.value);
    default:
        return state;
    }
};

export default setSearchCriteriaRx;
