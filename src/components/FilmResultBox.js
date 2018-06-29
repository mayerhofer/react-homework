import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-bootstrap';

import SearchButtonToolbar from './FilmDetail';
import FilmDetail from './FilmDetail';
import * as filters from '../constants/filters';

class FilmResultBox extends React.Component {
    checkMovie(movie) {
        const text = this.props.criteria.text;
        return (this.props.criteria.by === filters.SEARCH_BY_TITLE) ?
            movie.title.includes(text) :
            movie.genres.some((genre) => { return genre.includes(text); });
    }

    render() {
        return (
            <Grid fluid={true}>
                {
                    this.props.movies.filter(this.checkMovie.bind(this)).map(movie => 
                        <Col key={movie.id} xs={6} sm={3} md={6} lg={3}>
                            <FilmDetail {...{ movie }} />
                        </Col>
                    )
                }
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies && state.movies.data && Array.isArray(state.movies.data) ? state.movies.data : new Array(),
        criteria: state.searchFilterCriteria
    };
}

export default connect(mapStateToProps)(FilmResultBox);
