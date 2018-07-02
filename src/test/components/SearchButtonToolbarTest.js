import React from 'react';
import { render } from 'enzyme';

import SearchButtonToolbar from '../../client/components/SearchButtonToolbar';

describe('SearchButtonToolbar Component', () => {
    it('should render without throwing an error', () => {
        const store = {
            getState: () => ({
                searchFilter: 'this.props.filter',
                btnByTitleStyle: 'danger',
                btnByGenreStyle: 'default',
                onSetByTitle: 'this.props.onSetByTitle',
            }),
            dispatch: () => {},
            subscribe: () => {},
        };
        expect(render(<SearchButtonToolbar store={store} />)).toMatchSnapshot();
    });
});
