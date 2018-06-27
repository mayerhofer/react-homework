import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount, render} from 'enzyme';
import SearchButtonToolbar from '../../components/SearchButtonToolbar';

describe('SearchButtonToolbar Component', () => {

    it('should render without throwing an error', () => {
        expect(render(<SearchButtonToolbar />)).toMatchSnapshot();
    });
});
