import * as types from '../constants/actionTypes';
import * as filters from '../constants/filters';

const setLoadingStatusRx = (state = 'success', action) => {
    switch (action.type) {
        case types.SET_MOVIE_LOADING_STATUS:
            return action.status;
        default:
            return state;
    }
}

export default setLoadingStatusRx;
