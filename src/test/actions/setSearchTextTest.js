import * as actions from '../../actions/setSearchText';
import * as types from '../../constants/actionTypes';
import * as filters from '../../constants/filters';

describe('setSearchText', () => {
    it('should create an action to set in state the text used to filter search by title or genre', () => {
        const expectedAction = {
            type: types.SET_SEARCH_TEXT,
            value: undefined
        }
        expect(actions.setSearchText()).toEqual(expectedAction)
    });

    it('should create an action to set in state the text used to filter search by title or genre with argument', () => {
        const expectedAction = {
            type: types.SET_SEARCH_TEXT,
            value: 'Star Wars'
        }
        expect(actions.setSearchText('Star Wars')).toEqual(expectedAction)
    });

    it('should create an action to set in state the text used to filter search by title or genre with argument 2', () => {
        const expectedAction = {
            type: types.SET_SEARCH_TEXT,
            value: 'Ice Age'
        }
        expect(actions.setSearchText('Ice Age')).toEqual(expectedAction)
    });
});
