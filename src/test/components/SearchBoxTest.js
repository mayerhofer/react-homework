import React from 'react';
import { shallow } from 'enzyme';

import SearchBox from '../../client/components/SearchBox';

describe('SearchBox Component', () => {
    it('should render without throwing an error', () => {
        const store = {
            getState: () => ({
            }),
            dispatch: () => {},
            subscribe: () => {},
        };
        expect(shallow(<SearchBox store={store} />)).toMatchSnapshot();
    });
});
