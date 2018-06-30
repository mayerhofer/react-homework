import * as types from '../../constants/actionTypes';

const setSearchText = (value) => ({
    type: types.SET_SEARCH_TEXT,
    value: value
});

export default setSearchText;
