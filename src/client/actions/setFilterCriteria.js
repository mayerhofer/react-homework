import * as types from '../constants/actionTypes';

const setSearchFilter = (value) => ({
    type: types.SET_SEARCH_RESULTS_CRITERIA,
    value: value
});

export default setSearchFilter;
