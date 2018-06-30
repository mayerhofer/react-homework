import * as types from '../../constants/actionTypes';

const setSearchFilter = (value) => ({
    type: types.SET_SEARCH_FILTER,
    value: value
});

export default setSearchFilter;
