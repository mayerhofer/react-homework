import { combineReducers } from 'redux';

import * as types from '../constants/actionTypes';

const filter = (state = SEARCH_BY_TITLE, action) => {
    switch (action.type) {
        case types.SET_SEARCH_FILTER:
            return action.value;
        default:
            return state;
    }
}

const text = (state = '', action) => {
    switch (action.type) {
        case types.SET_SEARCH_TEXT:
            return action.value;
        default:
            return state;
    }
}

const search = combineReducers({
    filter,
    text
});

export default search;
