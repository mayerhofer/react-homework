import * as types from '../constants/actionTypes';

export const setSearchText = (text) => ({
    type: types.SET_SEARCH_TEXT,
    value: text
});

export const setSearchFilter = (value) => ({
    type: types.SET_SEARCH_FILTER,
    value: value
});

export const searchMovies = (filter, text) => {
    console.log('searchMovies action called.');
    return ({
        type: types.SET_SEARCH_RESULTS_CRITERIA,
        filter,
        text
    });
};
