import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Image } from 'react-bootstrap';

class FilmFullDetail extends React.Component {

    render() {
        var movie = this.props.movies.find((movie) => movie.id == this.props.match.params.id);
        return (
            <Grid fluid={true} style={{backgroundColor: 'black'}}>
                <Row>
                    <Col xs={12} md={4}><Image src={movie.poster_path} style={{width:'100%'}} rounded /></Col>
                    <Col xs={12} md={8}>
                            <Row><h1 style={{color: 'red'}}>{movie.title}</h1></Row>
                            <Row>
                                <Grid style={{color: 'white'}}>
                                    <Row>{movie.tagline}</Row>
                                    <Row><h4 style={{fontWeight: 'bold'}}>{movie.release_date.substring(0, 4) + '   ' + (movie.runtime || '?') + ' min'}</h4></Row>
                                    <Row />
                                    <Row>{movie.overview}</Row>
                                </Grid>
                            </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies && state.movies.data && Array.isArray(state.movies.data) ? state.movies.data : new Array(),
    };
}

export default connect(mapStateToProps)(FilmFullDetail);
