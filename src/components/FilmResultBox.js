import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-bootstrap';

import SearchButtonToolbar from './FilmDetail';
import FilmDetail from './FilmDetail';
import * as filters from '../constants/filters';

import setFilterCriteria from '../actions/setFilterCriteria';

class FilmResultBox extends React.Component {

    componentDidMount() {
        this.props.setFilterCriteria({text: this.props.searchText, by: this.props.filterBy});
    }

    checkMovie(movie) {
        let tempText = this.props.searchTextCriteria;
        if (!tempText || {}.toString.call(tempText) === '[object Function]')
            return false;
        let text = tempText.toUpperCase();
        return (this.props.filterByCriteria === filters.SEARCH_BY_TITLE) ?
            movie.title.toUpperCase().includes(text) :
            movie.genres.some((genre) => { return genre.toUpperCase().includes(text); });
    }

    renderMovie(movie) {
        return (
            <Col key={movie.id} xs={6} sm={3} md={6} lg={3}>
                <FilmDetail {...{ movie }} />
            </Col>
        );
    }

    renderMovie(movie) {
        return (
            <Col key={movie.id} xs={6} sm={3} md={6} lg={3}>
                <FilmDetail {...{ movie }} />
            </Col>
        );
    }

    render() {
        return (
            <Grid fluid={true}>
                <Row>
                {
                    this.props.movies.filter(this.checkMovie.bind(this)).map(movie => this.renderMovie(movie))
                }
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies && state.movies.data && Array.isArray(state.movies.data) ? state.movies.data : new Array(),
        searchText: state.textFromSearchField,
        filterBy: state.searchByFilter,
        searchTextCriteria: state.searchFilterCriteria.text,
        filterByCriteria: state.searchFilterCriteria.by
    };
}

function matchDispatchToProps(dispatch) {
    return {
        setFilterCriteria: (filterObj) => dispatch(setFilterCriteria(filterObj))
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(FilmResultBox);
