import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ButtonToolbar, Button, Label, Grid, Row, Col, Overlay } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as filters from '../../constants/filters';
import * as pageTexts from '../../constants/pageTexts';
import setSearchFilter from '../actions/setSearchFilter';
import setFilterCriteria from '../actions/setFilterCriteria';

class SearchButtonToolbar extends React.Component {

    render() {
        return (
            <ButtonToolbar>
                <Grid fluid={true}>
                    <Row className="show-grid">
                        <Col xs={12} sm={3} md={2} lg={2}><h4>{pageTexts.CAPTION_SEARCH_TOOLBAR}</h4></Col>
                        <Col xs={12} sm={2} md={1} lg={1}>
                            <Button bsStyle={this.props.searchFilter === filters.SEARCH_BY_TITLE ? 'danger' : 'default'} onClick={() => this.props.setFilter(filters.SEARCH_BY_TITLE)}>{pageTexts.CAPTION_ByTITLE_BUTTON}</Button>
                            <Button bsStyle={this.props.searchFilter === filters.SEARCH_BY_GENRE ? 'danger' : 'default'} onClick={() => this.props.setFilter(filters.SEARCH_BY_GENRE)}>{pageTexts.CAPTION_ByGENRE_BUTTON}</Button>
                        </Col>
                        <Col xs={6} sm={3} md={6} lg={7}></Col>
                        <Col xs={6} sm={2} md={1} lg={1}><Button type="submit" bsStyle="danger">{pageTexts.CAPTION_SEARCH_BUTTON}</Button></Col>
                    </Row>
                </Grid>
            </ButtonToolbar>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchText: state.textFromSearchField,
        searchFilter: state.searchByFilter
    }
}

function matchDispatchToProps(dispatch) {
    return {
        setFilter: (value) => dispatch(setSearchFilter(value)),
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchButtonToolbar);
