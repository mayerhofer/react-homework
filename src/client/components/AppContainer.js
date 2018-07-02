import React from 'react';

import SearchBox from './SearchBox';
import ErrorBoundary from './ErrorBoundary';
import FilmResultBox from './FilmResultBox';

class AppContainer extends React.Component {
    render() {
        return (
            <ErrorBoundary message="Sorry. Our search box crashed. Please call for support.">
                <SearchBox />
                <FilmResultBox />
            </ErrorBoundary>
        );
    }
}

export default AppContainer;
