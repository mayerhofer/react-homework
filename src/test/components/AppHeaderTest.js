import React from 'react';
import {shallow, mount, render} from 'enzyme';
import AppHeader from '../../components/AppHeader';

describe('AppHeader Component', () => {

    it('should render without throwing an error', () => {
        expect(shallow(<AppHeader />).find('div.navbar').exists()).toBe(true);
    });
});




