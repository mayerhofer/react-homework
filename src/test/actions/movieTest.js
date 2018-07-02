import * as actions from '../../client/actions/loadMovies';
import * as types from '../../constants/actionTypes';

describe('movie', () => {
    it('should create an action to notify loading was successful', () => {
        const expectedAction = {
            type: types.MOVIE_LOADING_SUCCESS,
        };
        expect(actions.loadMoviesSuccess()).toEqual(expectedAction);
    });

    it('should create an action to notify loading returned error', () => {
        const expectedAction = {
            type: types.MOVIE_LOADING_ERROR,
        };
        expect(actions.moviesLoadingError()).toEqual(expectedAction);
    });

    it('should create an action to notify loading started', () => {
        const expectedAction = {
            type: types.SET_LOADING_MOVIE_STATUS,
        };
        expect(actions.setLoadingMoviesStatus()).toEqual(expectedAction);
    });
});
