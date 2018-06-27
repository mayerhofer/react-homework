// const initialState = {
//     articles: []
// };
// const rootReducer = (state = initialState, action) => state;
// export default rootReducer;


import { combineReducers } from 'redux';
import { MOVIE_LOADING_START, MOVIE_LOADING_SUCCESS, MOVIE_LOADING_ERROR, MOVIE_DATA_GET, MOVIE_DATA_SET, MOVIE_DATA_CLEAR } from '../constants/actionTypes';

const loadStatus = (state = {
    isLoading: false,
    error: null
}, action) => {
    switch (action.type) {
        case MOVIE_LOADING_START:
            return {
                ...state,
                isLoading: true
            };
        case MOVIE_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null
            };
        case MOVIE_LOADING_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return state;
    }
}

const data = (state = null, action) => {
    switch (action.type) {
        case MOVIE_DATA_SET:
            return {
                ...action.data
            };
        case MOVIE_DATA_CLEAR:
            return null;
        default:
            return state;
    }
}

const id = (state = null, action) => {
    switch (action.type) {
        case MOVIE_DATA_GET:
            return action.id;
        default:
            return state;
    }
}

const movie = combineReducers({
    loadStatus,
    data,
    id
});

export default movie;
