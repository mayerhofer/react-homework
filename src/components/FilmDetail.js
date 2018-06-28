import React, { Component } from 'react';
import { Button, Thumbnail, Badge } from 'react-bootstrap';

import * as pageTexts from '../constants/pageTexts';

const FilmDetail = () => {
    return (
        <div width="200" height="400">
            <Thumbnail src={this.props.movie.poster_path} alt="description">
                <h2>{this.props.movie.title}<Badge>{this.props.movie.release_date}</Badge></h2>
                <p>{this.props.movie.genres}</p>
            </Thumbnail>
        </div>
    );
}

export default FilmDetail;
