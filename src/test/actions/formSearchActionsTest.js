import {setSearchFilter, setSearchText, setSearchSort} from '../../client/actions/formActions';
import * as types from '../../constants/actionTypes';
import * as filters from '../../constants/filters';

describe('Form properties actions', () => {
    describe('setSearchFilter', () => {
        it('should create an action to set in state the filter by title', () => {
            const expectedAction = {
                type: types.SET_SEARCH_FILTER,
                value: undefined
            }
            expect(setSearchFilter()).toEqual(expectedAction)
        });
    
        it('should create an action to set in state the filter by title with argument', () => {
            const expectedAction = {
                type: types.SET_SEARCH_FILTER,
                value: filters.SEARCH_BY_TITLE
            }
            expect(setSearchFilter(filters.SEARCH_BY_TITLE)).toEqual(expectedAction)
        });
    
        it('should create an action to set in state the filter by genre', () => {
            const expectedAction = {
                type: types.SET_SEARCH_FILTER,
                value: filters.SEARCH_BY_GENRE
            }
            expect(setSearchFilter(filters.SEARCH_BY_GENRE)).toEqual(expectedAction)
        });
    });

    describe('setSearchText', () => {
        it('should create an action to set in state the text used to filter search by title or genre', () => {
            const expectedAction = {
                type: types.SET_SEARCH_TEXT,
                value: undefined
            }
            expect(setSearchText()).toEqual(expectedAction);
        });

        it('should create an action to set in state the text used to filter search by title or genre with argument', () => {
            const expectedAction = {
                type: types.SET_SEARCH_TEXT,
                value: 'Star Wars'
            }
            expect(setSearchText('Star Wars')).toEqual(expectedAction)
        });

        it('should create an action to set in state the text used to filter search by title or genre with argument 2', () => {
            const expectedAction = {
                type: types.SET_SEARCH_TEXT,
                value: 'Ice Age'
            }
            expect(setSearchText('Ice Age')).toEqual(expectedAction)
        });
    });

    describe('setSearchSort', () => {
        it('it should return action object with undefined payload to set sortBy value in store', () => {
            const expectedAction = {
                type: types.SET_SEARCH_SORT,
                value: undefined
            }
            expect(setSearchSort()).toEqual(expectedAction);
        });

        it('it should return action object with "sortByDate" payload to set sortBy value in store', () => {
            const expectedAction = {
                type: types.SET_SEARCH_SORT,
                value: 'sortByDate'
            }
            expect(setSearchSort('sortByDate')).toEqual(expectedAction);
        });

        it('it should return action object with "sortByTitle" payload to set sortBy value in store', () => {
            const expectedAction = {
                type: types.SET_SEARCH_SORT,
                value: 'sortByTitle'
            }
            expect(setSearchSort('sortByTitle')).toEqual(expectedAction);
        });
    });
});
