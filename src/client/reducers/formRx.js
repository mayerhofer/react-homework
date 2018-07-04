import { Map } from 'immutable';

import * as types from '../../constants/actionTypes';
import * as filters from '../../constants/filters';

const initialState = Map({
    text: '',
    searchBy: filters.SEARCH_BY_TITLE,
    sortBy: 'vote_average',
    btnTitleStyle: 'danger',
    btnGenreStyle: 'default',
});

const setSearchCriteriaRx = (state = initialState, action) => {
    let newState;
    switch (action.type) {
    case types.SET_SEARCH_TEXT:
        console.log('yaooooooi');
        return state.set('text', action.value);
    case types.SET_SEARCH_FILTER:
        newState = state.set('searchBy', action.value);
        if (action.value && action.value === filters.SEARCH_BY_TITLE) {
            newState = newState.set('btnTitleStyle', 'danger');
            newState = newState.set('btnGenreStyle', 'default');
        } else {
            newState = newState.set('btnTitleStyle', 'default');
            newState = newState.set('btnGenreStyle', 'danger');
        }
        console.log(`helloooooooooooooooooooooooooooooo ${newState}`);
        return newState;
    case types.SET_SEARCH_SORT:
        return state.set('sortBy', action.value);
    default:
        return state;
    }
};

export default setSearchCriteriaRx;
