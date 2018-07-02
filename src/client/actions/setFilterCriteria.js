import * as types from '../../constants/actionTypes';

const setSearchFilter = value => ({
    type: types.SET_SEARCH_RESULTS_CRITERIA,
    value,
});

const search = value => ({
    type: types.APPLY_SEARCH,
    value,
});

export { setSearchFilter, search };
