import React from 'react';

import SearchBox from './SearchBox';
import ErrorBoundary from './ErrorBoundary';
import FilmResultBox from './FilmResultBox';

class AppContainer extends React.Component {
    errorMessage = 'Sorry. Our search box crashed. Please call for support.';

    render() {
        return (
            <ErrorBoundary message={this.errorMessage}>
                <SearchBox />
                <FilmResultBox />
            </ErrorBoundary>
        );
    }
}

export default AppContainer;
