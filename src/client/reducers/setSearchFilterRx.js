import * as types from '../../constants/actionTypes';
import * as filters from '../../constants/filters';

const setSearchFilterRx = (state = filters.SEARCH_BY_TITLE, action) => {
    switch (action.type) {
        case types.SET_SEARCH_FILTER:
            return action.value;
        default:
            return state;
    }
}

export default setSearchFilterRx;
