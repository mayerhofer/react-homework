import { fetchMovies } from "../services/api/movies";

export const moviesLoadingStart = () => ({
    type: 'MOVIES_DATA_LOADING_START'
});
  
export const moviesLoadingSuccess = () => ({
    type: 'MOVIES_DATA_LOADING_SUCCESS'
});

export const moviesLoadingError = (error) => ({
    type: 'MOVIES_DATA_LOADING_ERROR',
    error: error
});

export const moviesDataSet = data => ({
    type: 'MOVIE_DATA_SET',
    data: data.data,
    total: data.total
});

export const loadMovies = () => {
    return async dispatch => {
      try {
        dispatch(moviesLoadingStart());
        dispatch(showSpinner());
        const data = await fetchMovies();
        dispatch(moviesLoadingSuccess());
        dispatch(hideSpinner());
        console.log(data);
        return dispatch(moviesDataSet(data));
      } catch(error) {
        dispatch(moviesLoadingError(error));
        dispatch(hideSpinner());
      }
    }
  }
