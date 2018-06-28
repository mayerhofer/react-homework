import setTextSearchRx from '../../reducers/setTextSearchRx';
import * as types from '../../constants/actionTypes';

describe('setTextSearchRx', () => {
    it('should return new state with text from search field updated.', () => {
        const expected = 'Film name to search for';
        const action = {
            type: types.SET_SEARCH_TEXT,
            value: expected
        };
        var state = setTextSearchRx('Last text', action);
        expect(state).toEqual(expected);
    });

    it('should do nothing.', () => {
        const expected = 'Last text';
        const action = {
            type: types.SET_SEARCH_TEXT + '2',
            value: 'Film name to search for'
        };
        var state = setTextSearchRx(expected, action);
        expect(state).toEqual(expected);
    });
});
