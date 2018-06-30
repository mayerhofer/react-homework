import * as types from '../constants/actionTypes';
import * as filters from '../constants/filters';

import { fetchMovie } from '../servers/movieSvc';

const setSearchFilterRx = (state = {text: '', by: filters.SEARCH_BY_TITLE}, action) => {
    switch (action.type) {
        case types.SET_SEARCH_RESULTS_CRITERIA:
            return action.value;
        default:
            return state;
    }
}

export default setSearchFilterRx;