import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import SearchBox from './SearchBox';
import ErrorBoundary from './ErrorBoundary';
import FilmResultBox from './FilmResultBox';

import {loadMovies} from '../actions/loadMovies';

class AppContainer extends React.Component {

    componentDidMount() {
        if ((!this.props.movies) || !this.props.movies.length) {
            this.props.loadMovies();
        }
    }

    render() {
        return (
            <ErrorBoundary message="Sorry. Our search box crashed. Please call for support.">
                <SearchBox />
                <FilmResultBox />
            </ErrorBoundary>
        );
    };
}

function mapStateToProps(state) {
    return {
        movies: state.movies,
    }
}

function matchDispatchToProps(dispatch) {
    return {
        loadMovies: () => dispatch(loadMovies()),
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(AppContainer);
