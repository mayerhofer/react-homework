import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount, render} from 'enzyme';
import AppContainer from '../../components/AppContainer';

describe('AppContainer Component', () => {

    it('should render without throwing an error', () => {
        expect(shallow(<AppContainer loadMovies={() => {}} />)).toMatchSnapshot();
    });
});