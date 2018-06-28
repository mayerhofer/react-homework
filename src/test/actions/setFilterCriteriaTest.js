import setFilterCriteria from '../../actions/setFilterCriteria';
import * as types from '../../constants/actionTypes';
import * as filters from '../../constants/filters';

describe('setFilterCriteria', () => {
    it('should create an action to set in state the filter', () => {
        const expectedAction = {
            type: types.SET_SEARCH_RESULTS_CRITERIA,
            value: undefined
        }
        expect(setFilterCriteria()).toEqual(expectedAction);
    });

    it('should create an action to set in state the filter with argument', () => {
        const expectedAction = {
            type: types.SET_SEARCH_RESULTS_CRITERIA,
            value: {
                text: 'Text for title or Genre',
                filterBy: filters.SEARCH_BY_TITLE
            }
        }
        expect(setFilterCriteria({ text: 'Text for title or Genre', filterBy: filters.SEARCH_BY_TITLE })).toEqual(expectedAction);
    });

    it('should create an action to set in state the filter', () => {
        const expectedAction = {
            type: types.SET_SEARCH_RESULTS_CRITERIA,
            value: filters.SEARCH_BY_GENRE
        }
        expect(setFilterCriteria(filters.SEARCH_BY_GENRE)).toEqual(expectedAction);
    });
});
