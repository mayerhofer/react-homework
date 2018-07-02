import React from 'react';
import { shallow } from 'enzyme';

import FilmResultBox from '../../client/components/FilmResultBox';

describe('FilmResultBox Component', () => {
    it('should render without throwing an error', () => {
        const store = {
            getState: () => ({
            }),
            dispatch: () => {},
            subscribe: () => {},
        };
        expect(shallow(<FilmResultBox store={store} />)).toMatchSnapshot();
    });
});
