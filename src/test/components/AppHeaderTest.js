import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount, render} from 'enzyme';
import AppHeader from '../../components/AppHeader';

describe('AppHeader Component', () => {

    it('should render without throwing an error', () => {
        // const tree = renderer.create(
        //     <div></div>
        // ).toJSON();
        // expect(tree).toMatchSnapshot();
        // expect(shallow(<AppHeader />).find('div.navbar').exists()).toBe(true);
        expect(render(<AppHeader />)).toMatchSnapshot();
    });
});




