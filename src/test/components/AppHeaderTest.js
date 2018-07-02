import React from 'react';
import { render } from 'enzyme';

import AppHeader from '../../client/components/AppHeader';

describe('AppHeader Component', () => {
    it('should render without throwing an error', () => {
        expect(render(<AppHeader />)).toMatchSnapshot();
    });
});
