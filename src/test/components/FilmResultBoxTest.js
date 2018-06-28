import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount, render} from 'enzyme';
import FilmResultBox from '../../components/FilmResultBox';

describe('FilmResultBox Component', () => {

    it('should render without throwing an error', () => {
        expect(shallow(<FilmResultBox />)).toMatchSnapshot();
    });
});
