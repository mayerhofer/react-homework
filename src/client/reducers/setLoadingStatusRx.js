import * as types from '../../constants/actionTypes';

const setLoadingStatusRx = (state = 'success', action) => {
    switch (action.type) {
    case types.SET_MOVIE_LOADING_STATUS:
        return action.status;
    default:
        return state;
    }
};

export default setLoadingStatusRx;
