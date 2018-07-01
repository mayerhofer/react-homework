import * as types from '../../constants/actionTypes';

const setSearchFilter = (value) => ({
    type: types.SET_SEARCH_FILTER,
    value: value
});

const setSearchText = (value) => ({
    type: types.SET_SEARCH_TEXT,
    value: value
});

const setSearchSort = (value) => ({
    type: types.SET_SEARCH_SORT,
    value: value
});

export {
    setSearchFilter,
    setSearchText,
    setSearchSort,
};
