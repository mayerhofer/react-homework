import * as types from '../../constants/actionTypes';
import * as filters from '../../constants/filters';

const setFilterCriteriaRx = (state = { text: '', by: filters.SEARCH_BY_TITLE }, action) => {
    switch (action.type) {
    case types.SET_SEARCH_RESULTS_CRITERIA:
        return action.value;
    default:
        return state;
    }
};

const searchRx = (state = { text: '', searchBy: filters.SEARCH_BY_TITLE, sortBy: 'title' }, action) => {
    switch (action.type) {
    case types.APPLY_SEARCH:
        return action.value;
    default:
        return state;
    }
};

export { setFilterCriteriaRx, searchRx };
