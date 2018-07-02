import React from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-bootstrap';

import FilmDetail from './FilmDetail';
import * as filters from '../../constants/filters';

import { setSearchFilter } from '../actions/setFilterCriteria';

class FilmResultBox extends React.Component {
    componentDidMount() {
        this.props.setFilterCriteria({ text: this.props.searchText, by: this.props.filterBy });
    }

    checkMovie(movie) {
        const tempText = this.props.searchTextCriteria;
        if (!tempText || {}.toString.call(tempText) === '[object Function]') return false;
        const text = tempText.toUpperCase();
        return (this.props.filterByCriteria === filters.SEARCH_BY_TITLE)
            ? movie.title.toUpperCase().includes(text)
            : movie.genres.some(genre => genre.toUpperCase().includes(text));
    }

    static renderMovie(movie) {
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
                        this.props.movies.filter(this.checkMovie.bind(this))
                            .map(movie => FilmResultBox.renderMovie(movie))
                    }
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies && state.movies.data
            && Array.isArray(state.movies.data) ? state.movies.data : [],
        searchText: state.textFromSearchField,
        filterBy: state.searchByFilter,
        searchTextCriteria: state.searchFilterCriteria.text,
        filterByCriteria: state.searchFilterCriteria.by,
    };
}

function matchDispatchToProps(dispatch) {
    return {
        setFilterCriteria: filterObj => dispatch(setSearchFilter(filterObj)),
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(FilmResultBox);
