import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import AppHeader from './AppHeader';
import AppContainer from './AppContainer';

class Root extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <AppHeader />
                <AppContainer />
            </ErrorBoundary>
        );
    }
}

export default Root;
