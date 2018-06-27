import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from '../../actions/movie';
import * as types from '../../constants/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('movie async actions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it ('should create MOVIE_LOAD_SUCCESS when loading movies has been done', () => {
        fetchMock.getOnce('*', { body: { movies: ['test object'] }, headers: { 'content-type': 'application/json' }});

        const expectedActions = [
            { type: types.MOVIE_LOADING_START },
            { type: types.MOVIE_LOADING_SUCCESS },
            { type: types.MOVIE_DATA_SET, data: undefined, total: undefined }

        ];
        const store = mockStore({ movies: [] });

        return store.dispatch(actions.loadMovies()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
