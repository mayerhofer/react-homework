import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './SearchBox';
import ErrorBoundary from './ErrorBoundary';

class AppContainer extends React.Component {

    componentDidMount() {
        if (!this.props.movies.data.length) {
            this.props.loadMovies();
        }
    }

    render() {
        return (
            <ErrorBoundary message="Sorry. Our search box crashed. Please call for support.">
                <SearchBox />
            </ErrorBoundary>
        );
    };
}

export default AppContainer;
