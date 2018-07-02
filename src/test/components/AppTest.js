import React from 'react';
import { shallow } from 'enzyme';

import App from '../../client/components/App';

describe('AppContainer Component', () => {
    it('should render without throwing an error', () => {
        const store = {
            getState: () => ({
            }),
            dispatch: () => {},
            subscribe: () => {},
        };
        expect(shallow(<App store={store} persistor={() => {}} />)).toMatchSnapshot();
    });
});
