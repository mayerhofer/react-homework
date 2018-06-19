import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './SearchBox';
import ErrorBoundary from './ErrorBoundary';
import { Grid, Row, Col } from 'react-bootstrap';

class AppContainer extends React.Component {

    render() {
        // console.log(Button)
        const dummySentences = [
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            'Donec hendrerit tempor tellus.',
            'Donec pretium posuere tellus.',
            'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
            'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            'Nulla posuere.',
            'Donec vitae dolor.',
            'Nullam tristique diam non turpis.',
            'Cras placerat accumsan nulla.',
            'Nullam rutrum.',
            'Nam vestibulum accumsan nisl.'
        ];

        const gridInstance = (
            <Grid>
                <Row className="show-grid">
                    <Col sm={6} md={3}>
                        <code>&lt;{'Col sm={6} md={3}'} /">">&gt;</code>
                        <br />
                        {dummySentences.slice(0, 6).join(' ')}
                    </Col>
                    <Col sm={6} md={3}>
                        <code>&lt;{'Col sm={6} md={3}'} /">">&gt;</code>
                        <br />
                        {dummySentences.slice(0, 4).join(' ')}
                    </Col>
                    <Col sm={6} md={3}>
                        <code>&lt;{'Col sm={6} md={3}'} /">">&gt;</code>
                        <br />
                        {dummySentences.slice(0, 6).join(' ')}
                    </Col>
                    <Col sm={6} md={3}>
                        <code>&lt;{'Col sm={6} md={3}'} /">">&gt;</code>
                        <br />
                        {dummySentences.slice(0, 2).join(' ')}
                    </Col>
                </Row>

            </Grid >
        );

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
