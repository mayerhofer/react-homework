import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount, render} from 'enzyme';
import ErrorBoundary from '../../components/ErrorBoundary';
import SearchBox from '../../components/SearchBox';

describe('ErrorBoundary Component', () => {

    var thrower = () => {throw new Error('Component expected to throw error while rendering')};

    it('should render nested component without throwing an error', () => {
        expect(shallow(<ErrorBoundary><h1>Teste</h1></ErrorBoundary>)).toMatchSnapshot();
    });

    it('should render error message component', () => {
        const component = mount(<ErrorBoundary />);
        component.setState({
            error: 'Error Name',
            errorInfo: 'Error information'
        });
        expect(component).toContain('Error information');
        //expect(render(<ErrorBoundary><div>{thrower()}</div></ErrorBoundary>).find('div.details').exists()).toBe(true);
    });
});
