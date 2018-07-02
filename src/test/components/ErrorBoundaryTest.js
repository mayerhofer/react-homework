import React from 'react';
import { shallow, mount } from 'enzyme';

import ErrorBoundary from '../../client/components/ErrorBoundary';

describe('ErrorBoundary Component', () => {
    it('should render nested component without throwing an error', () => {
        expect(shallow(<ErrorBoundary><h1>Teste</h1></ErrorBoundary>)).toMatchSnapshot();
    });

    it('should render error message component', () => {
        const ComponentWithError = () => {
            throw new Error('Error message');
        };
        const nativeConsoleError = console.error;
        const error = jest.fn();
        console.error = error;
        const component = mount(<ErrorBoundary><ComponentWithError /></ErrorBoundary>);
        console.error = nativeConsoleError;
        expect(component.instance().state.hasError).toBeTruthy();
        expect(component.instance().state.error.message).toEqual('Error message');
    });
});
