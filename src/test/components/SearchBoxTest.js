import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount, render} from 'enzyme';
import SearchBox from '../../components/SearchBox';

describe('SearchBox Component', () => {

    it('should render without throwing an error', () => {
        expect(shallow(<SearchBox />)).toMatchSnapshot();
    });
});




