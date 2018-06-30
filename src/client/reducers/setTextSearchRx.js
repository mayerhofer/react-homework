import * as types from '../../constants/actionTypes';

const setTextSearchRx = (state = '', action) => {
    switch (action.type) {
        case types.SET_SEARCH_TEXT:
            return action.value;
        default:
            return state;
    }
}

export default setTextSearchRx;
