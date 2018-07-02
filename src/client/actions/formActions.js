import * as types from '../../constants/actionTypes';

const setSearchFilter = value => ({
    type: types.SET_SEARCH_FILTER,
    value,
});

const setSearchText = value => ({
    type: types.SET_SEARCH_TEXT,
    value,
});

const setSearchSort = value => ({
    type: types.SET_SEARCH_SORT,
    value,
});

export {
    setSearchFilter,
    setSearchText,
    setSearchSort,
};
