import * as types from '../constants/actionTypes';

export const setSearchFilter = (value) => ({
    type: types.SET_SEARCH_FILTER,
    value: value
});
