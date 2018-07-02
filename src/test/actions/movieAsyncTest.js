import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

import * as actions from '../../client/actions/loadMovies';
import * as types from '../../constants/actionTypes';

const mockStore = configureMockStore([]);

describe('movie async actions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('should create MOVIE_LOAD_SUCCESS when loading movies has been done', () => {
        fetchMock.getOnce('*', { body: { movies: ['test object'] }, headers: { 'content-type': 'application/json' } });

        const expectedActions = [
            { status: 'started', type: types.SET_LOADING_MOVIE_STATUS },
            { movies: { movies: ['test object'] }, type: types.MOVIE_LOADING_SUCCESS },
            { status: 'success', type: types.SET_LOADING_MOVIE_STATUS },
        ];
        const store = mockStore({ movies: [] });

        return store.dispatch(actions.loadMovies()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
