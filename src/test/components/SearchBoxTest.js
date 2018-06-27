import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount, render} from 'enzyme';
import SearchBox from '../../components/SearchBox';

describe('SearchBox Component', () => {

    it('should render without throwing an error', () => {
        expect(render(<SearchBox />)).toMatchSnapshot();
    });

    it('handler should do nothing', () => {
        const component = mount(<SearchBox />);

        component.instance().handleChange(null);
        expect(component.instance().state.value).toEqual('');
    });

    it('handler should do nothing', () => {
        const component = mount(<SearchBox />);

        component.instance().handleChange({ target: null });
        expect(component.instance().state.value).toEqual('');
    });
});




