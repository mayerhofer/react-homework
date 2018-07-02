import * as types from '../../constants/actionTypes';
import * as filters from '../../constants/filters';

const setSearchFilterRx = (state = filters.SEARCH_BY_TITLE, action) => {
    switch (action.type) {
    case types.MOVIE_LOADING_ERROR:
        return action.value;
    default:
        return state;
    }
};

export default setSearchFilterRx;
