import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount, render} from 'enzyme';
import App from '../../App';

describe('AppContainer Component', () => {

    it('should render without throwing an error', () => {
        expect(render(<App />)).toMatchSnapshot();
    });
});




