import React from 'react';
import { Thumbnail, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';

const filmDetailDivStyle = {
    maxWidth: '200px',
    maxHeigth: '400px',
    overflow: 'auto',
};

class FilmDetail extends React.Component {
    loadMovie() {
        window.location.href = `/#/movie/${this.props.movie.id}`;
    }

    render() {
        return (
            <div style={filmDetailDivStyle} onClick={() => this.loadMovie()}>
                <Thumbnail src={this.props.movie.poster_path} alt="description">
                    <h4>
                        {this.props.movie.title}&nbsp;
                        <Badge>{this.props.movie.release_date.substring(0, 4)}</Badge>
                    </h4>
                    <p>{this.props.movie.genres.map(genre => `${genre},`)}</p>
                </Thumbnail>
            </div>
        );
    }
}

FilmDetail.propTypes = {
    movie: PropTypes.object,
};

export default FilmDetail;
