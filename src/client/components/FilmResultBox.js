import React from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-bootstrap';

import FilmDetail from './FilmDetail';

class FilmResultBox extends React.Component {
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
                        this.props.movies
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
    };
}

export default connect(mapStateToProps)(FilmResultBox);
