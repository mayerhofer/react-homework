import { fetchMovies } from '../services/api/movies';
import * as types from '../constants/actionTypes';

export const moviesLoadingStart = () => ({
    type: types.MOVIES_DATA_LOADING_START
});
  
export const moviesLoadingSuccess = () => ({
    type: types.MOVIES_DATA_LOADING_SUCCESS
});

export const moviesLoadingError = (error) => ({
    type: types.MOVIES_DATA_LOADING_ERROR,
    error: error
});

export const moviesDataSet = data => ({
    type: types.MOVIE_DATA_SET,
    data: data.data,
    total: data.total
});

export const loadMovies = () => {
    return async dispatch => {
      try {
        dispatch(moviesLoadingStart());
        const data = await fetchMovies();
        dispatch(moviesLoadingSuccess());
        return dispatch(moviesDataSet(data));
      } catch(error) {
        dispatch(moviesLoadingError(error));
      }
    }
  }
