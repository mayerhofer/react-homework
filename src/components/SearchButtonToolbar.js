import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ButtonToolbar, Button, Label, Grid, Row, Col, Overlay } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as filters from '../constants/filters';
import * as pageTexts from '../constants/pageTexts';
import * as searchActions from '../actions/search';

class SearchButtonToolbar extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.filter === filters.SEARCH_BY_TITLE)
            this.state = {
                searchFilter: this.props.filter, 
                btnByTitleStyle: 'danger', 
                btnByGenreStyle: 'default',
                onSetByTitle: this.props.onSetByTitle
            };
        else
            this.state = {
                searchFilter: this.props.filter, 
                btnByTitleStyle: 'default', 
                btnByGenreStyle: 'danger'
            };
    }

    searchByTitle(e) {
        this.setState({
            searchFilter: filters.SEARCH_BY_TITLE,
            btnByTitleStyle: 'danger',
            btnByGenreStyle: 'default'
        });
    }
    searchByGenre(e) {
        this.setState({
            searchFilter: filters.SEARCH_BY_GENRE,
            btnByTitleStyle: 'default',
            btnByGenreStyle: 'danger'
        });
    }

    render() {
        return (
            <ButtonToolbar>
                <Grid fluid={true}>
                    <Row className="show-grid">
                        <Col xs={12} sm={3} md={2} lg={2}><h4>{pageTexts.CAPTION_SEARCH_TOOLBAR}</h4></Col>
                        <Col xs={12} sm={2} md={1} lg={1}>
                            <Button bsStyle={this.state.btnByTitleStyle} onClick={this.searchByTitle.bind(this)}>{pageTexts.CAPTION_ByTITLE_BUTTON}</Button>
                            <Label>&#160;&#160;</Label>
                            <Button bsStyle={this.state.btnByGenreStyle} onClick={this.searchByGenre.bind(this)}>{pageTexts.CAPTION_ByGENRE_BUTTON}</Button>
                        </Col>
                        <Col xs={6} sm={3} md={6} lg={7}></Col>
                        <Col xs={6} sm={2} md={1} lg={1}><Button type="submit" bsStyle="danger" onClick={() => this.props.search()}>{pageTexts.CAPTION_SEARCH_BUTTON}</Button></Col>
                    </Row>
                </Grid>
            </ButtonToolbar>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchText: state.searchText,
        searchFilter: state.selectedFilter
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({search: searchActions.searchMovies}, dispatch);
}

export default connect(mapStateToProps)(SearchButtonToolbar);
