import * as types from '../../constants/actionTypes';
import initialState from '../../servers/initialState';

const loadMoviesRx = (state = initialState.movies, action) => {
    switch (action.type) {
        case types.MOVIE_LOADING_SUCCESS:
            return action.movies;
        default:
            return state;
    }
}

export default loadMoviesRx;
