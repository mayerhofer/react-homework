import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './SearchBox';
import ErrorBoundary from './ErrorBoundary';
import { Grid, Row, Col } from 'react-bootstrap';

class AppContainer extends React.Component {

    render() {
        return (
            <ErrorBoundary message="Sorry. Our search box crashed. Please call for support.">
                <SearchBox
                    title="FIND YOUR MOVIE"
                    caption="Search ..."
                    toolbarButtonCaption="SEARCH BY"
                    btnByTitleCaption="TITLE"
                    btnByGenreCaption="GENRE"
                    btnSearchCaption="SEARCH" />
            </ErrorBoundary>
        );
    };
}

export default AppContainer;
