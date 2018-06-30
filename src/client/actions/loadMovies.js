import {fetchMovies} from '../../servers/movieSvc';
import { SET_LOADING_MOVIE_STATUS, MOVIE_LOADING_ERROR, MOVIE_LOADING_SUCCESS } from '../constants/actionTypes';

export const setLoadingMoviesStatus = (status) => ({
    type: SET_LOADING_MOVIE_STATUS,
    status: status
});

export function loadMoviesSuccess(movies) {  
    return {type: MOVIE_LOADING_SUCCESS, movies};
}

export const moviesLoadingError = (error) => ({
    type: MOVIE_LOADING_ERROR,
    error: error
});

export function loadMovies() {
    return function(dispatch) {
        dispatch(setLoadingMoviesStatus('started'));
        return fetchMovies().then(movies => {
            dispatch(loadMoviesSuccess(movies));
            dispatch(setLoadingMoviesStatus('success'));
        }).catch(error => {
            dispatch(moviesLoadingError(error));
            dispatch(setLoadingMoviesStatus('error'));
        });
    };
}
  