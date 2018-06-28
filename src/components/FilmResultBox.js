import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-bootstrap';

import SearchButtonToolbar from './FilmDetail';
import FilmDetail from './FilmDetail';

const FilmResultBox = () => {
    return (
        <Grid>
            {this.props.movies.map(movie => <FilmDetail {...{ movie }} />)}
        </Grid>
    );
}

function mapStateToProps(state) {
    return { movies: state.movies ? state.movies : []};
}

export default connect(mapStateToProps)(FilmResultBox);
