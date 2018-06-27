import * as actions from '../../actions/movie';
import * as types from '../../constants/actionTypes';

describe('movie', () => {
    it('should create an action to notify loading was successful', () => {
        const expectedAction = {
            type: types.MOVIE_LOADING_SUCCESS
        }
        expect(actions.moviesLoadingSuccess()).toEqual(expectedAction)
    });

    it('should create an action to notify loading returned error', () => {
        const expectedAction = {
            type: types.MOVIE_LOADING_ERROR
        }
        expect(actions.moviesLoadingError()).toEqual(expectedAction)
    });

    it('should create an action to notify loading started', () => {
        const expectedAction = {
            type: types.MOVIE_LOADING_START
        }
        expect(actions.moviesLoadingStart()).toEqual(expectedAction)
    });

    it('should create an action to get movies from data set', () => {
        const data = { data: 'test data', total: 'test total' };
        const expectedAction = {
            type: types.MOVIE_DATA_SET,
            data: data.data,
            total: data.total
        }
        expect(actions.moviesDataSet(data)).toEqual(expectedAction)
    });
});
