import React from 'react';
import { shallow } from 'enzyme';

import AppContainer from '../../client/components/AppContainer';

describe('AppContainer Component', () => {
    it('should render without throwing an error', () => {
        const store = {
            getState: () => ({
            }),
            dispatch: () => {},
            subscribe: () => {},
        };
        expect(shallow(<AppContainer store={store} loadMovies={() => {}} />)).toMatchSnapshot();
    });
});
