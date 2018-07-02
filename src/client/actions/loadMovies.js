import * as actions from '../../constants/actionTypes';

export const setLoadingMoviesStatus = status => ({
    type: actions.SET_LOADING_MOVIE_STATUS,
    status,
});

export function loadMoviesSuccess(movies) {
    return { type: actions.MOVIE_LOADING_SUCCESS, movies };
}

export const moviesLoadingError = error => ({
    type: actions.MOVIE_LOADING_ERROR,
    error,
});

export function applySearch(text, searchBy, sortBy) {
    return { type: actions.APPLY_SEARCH, payload: { text, searchBy, sortBy } };
}
