import setSearchFilterRx from '../../client/reducers/setSearchFilterRx';

import * as types from '../../constants/actionTypes';
import * as filters from '../../constants/filters';

describe('setSearchFilterRx', () => {
    it('should return new state with text from search field updated.', () => {
        const expected = filters.SEARCH_BY_GENRE;
        const action = {
            type: types.SET_SEARCH_FILTER,
            value: expected,
        };
        const state = setSearchFilterRx(filters.SEARCH_BY_TITLE, action);
        expect(state).toEqual(expected);
    });

    it('should do nothing.', () => {
        const expected = filters.SEARCH_BY_TITLE;
        const action = {
            type: `${types.SET_SEARCH_FILTER}2`,
            value: filters.SEARCH_BY_GENRE,
        };
        const state = setSearchFilterRx(filters.SEARCH_BY_TITLE, action);
        expect(state).toEqual(expected);
    });

    it('should do nothing.', () => {
        const expected = filters.SEARCH_BY_TITLE;
        const action = {
            type: `${types.SET_SEARCH_FILTER}2`,
            value: filters.SEARCH_BY_GENRE,
        };
        const actual = setSearchFilterRx(undefined, action);
        expect(actual).toEqual(expected);
    });
});
