import * as types from '../constants/actionTypes';
import * as filters from '../constants/filters';

import { fetchMovie } from '../servers/movieSvc';

const setSearchFilterRx = (state = filters.SEARCH_BY_TITLE, action) => {
    switch (action.type) {
        case types.SET_SEARCH_RESULTS_CRITERIA:
            fetchMovie(447365).then((res) => {
                console.log(res);
            });
            return action.value;
        default:
            return state;
    }
}

export default setSearchFilterRx;
