import * as actions from '../../actions/setSearchFilter';
import * as types from '../../constants/actionTypes';
import * as filters from '../../constants/filters';

describe('setSearchFilter', () => {
    it('should create an action to set in state the filter by title', () => {
        const expectedAction = {
            type: types.SET_SEARCH_FILTER,
            value: undefined
        }
        expect(actions.setSearchFilter()).toEqual(expectedAction)
    });

    it('should create an action to set in state the filter by title with argument', () => {
        const expectedAction = {
            type: types.SET_SEARCH_FILTER,
            value: filters.SEARCH_BY_TITLE
        }
        expect(actions.setSearchFilter(filters.SEARCH_BY_TITLE)).toEqual(expectedAction)
    });

    it('should create an action to set in state the filter by genre', () => {
        const expectedAction = {
            type: types.SET_SEARCH_FILTER,
            value: filters.SEARCH_BY_GENRE
        }
        expect(actions.setSearchFilter(filters.SEARCH_BY_GENRE)).toEqual(expectedAction)
    });
});
