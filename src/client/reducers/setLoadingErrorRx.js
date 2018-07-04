import * as types from '../../constants/actionTypes';

const setSearchFilterRx = (state = '', action) => {
    switch (action.type) {
    case types.MOVIE_LOADING_ERROR:
        return action.value;
    default:
        return state;
    }
};

export default setSearchFilterRx;
