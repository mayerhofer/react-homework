import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount, render} from 'enzyme';

import SearchBox from '../../client/components/SearchBox';

describe('SearchBox Component', () => {

    it('should render without throwing an error', () => {
        const store = {
            getState: () => ({
            }),
            dispatch: () => {},
            subscribe: () => {}
        }
        expect(shallow(<SearchBox store={store} />)).toMatchSnapshot();
    });
});
