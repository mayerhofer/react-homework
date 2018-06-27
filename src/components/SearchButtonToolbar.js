import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ButtonToolbar, Button, Label, Grid, Row, Col, Overlay } from 'react-bootstrap';

import * as filters from '../constants/filters';
import * as pageTexts from '../constants/pageTexts';

class SearchButtonToolbar extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.filter === filters.SEARCH_BY_TITLE)
            this.state = {searchFilter: this.props.filter, btnByTitleStyle: 'danger', btnByGenreStyle: 'default'};
        else
            this.state = {searchFilter: this.props.filter, btnByTitleStyle: 'default', btnByGenreStyle: 'danger'};
    }

    searchByTitle(e) {
        this.setState({
            searchFilter: filters.SEARCH_BY_TITLE,
            btnByTitleStyle: 'danger',
            btnByGenreStyle: 'default'
        });
        this.props.onSetByTitle(e);
    }
    searchByGenre(e) {
        this.setState({
            searchFilter: filters.SEARCH_BY_GENRE,
            btnByTitleStyle: 'default',
            btnByGenreStyle: 'danger'
        });
        this.props.onSetByGenre(e);
    }

    render() {
        return (
            <ButtonToolbar>
                <Grid fluid={true}>
                    <Row className="show-grid">
                        <Col xs={12} sm={3} md={2} lg={2}><h4>{this.props.title}</h4></Col>
                        <Col xs={12} sm={2} md={1} lg={1}>
                            <Button bsStyle={this.state.btnByTitleStyle} onClick={this.searchByTitle.bind(this)}>{this.props.btnByTitleCaption}</Button>
                            <Label>&#160;&#160;</Label>
                            <Button bsStyle={this.state.btnByGenreStyle} onClick={this.searchByGenre.bind(this)}>{this.props.btnByGenreCaption}</Button>
                        </Col>
                        <Col xs={6} sm={3} md={6} lg={7}></Col>
                        <Col xs={6} sm={2} md={1} lg={1}><Button type="submit" bsStyle="danger">{pageTexts.CAPTION_SEARCH_BUTTON}</Button></Col>
                    </Row>
                </Grid>
            </ButtonToolbar>
        );
    }
}

export default SearchButtonToolbar;
