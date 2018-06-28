import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-bootstrap';

import SearchButtonToolbar from './FilmDetail';
import FilmDetail from './FilmDetail';

class FilmResultBox extends React.Component {
    render() {
        return (
            <Grid>
                <Row>{this.props.movies.length}</Row>
                {this.props.movies.map(movie => <Col key={movie.id}><FilmDetail {...{ movie }} /></Col>)}
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return { movies: state.movies && state.movies.data && Array.isArray(state.movies.data) ? state.movies.data : new Array()};
}

export default connect(mapStateToProps)(FilmResultBox);
