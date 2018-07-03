import React from 'react';
import {
    ButtonToolbar, Button, Grid, Row, Col,
} from 'react-bootstrap';
import { connect } from 'react-redux';

import * as filters from '../../constants/filters';
import * as pageTexts from '../../constants/pageTexts';
import { setSearchFilter } from '../actions/formActions';

class SearchButtonToolbar extends React.Component {
    click = (filter) => {
        console.log(`setting filter to ${filter}`);
        this.props.setFilter(filter);
    }

    render() {
        return (
            <ButtonToolbar>
                <Grid fluid={true}>
                    <Row className="show-grid">
                        <Col xs={12} sm={3} md={2} lg={2}>
                            <h4>{pageTexts.CAPTION_SEARCH_TOOLBAR}</h4>
                        </Col>
                        <Col xs={12} sm={2} md={1} lg={1}>
                            <Button bsStyle={this.props.searchFilter === filters.SEARCH_BY_TITLE ? 'danger' : 'default'} onClick={() => this.click(filters.SEARCH_BY_TITLE)}>{pageTexts.CAPTION_BY_TITLE_BUTTON}</Button>
                            <Button bsStyle={this.props.searchFilter === filters.SEARCH_BY_GENRE ? 'danger' : 'default'} onClick={() => this.click(filters.SEARCH_BY_GENRE)}>{pageTexts.CAPTION_BY_GENRE_BUTTON}</Button>
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
        searchFilter: state.searchFilterCriteria.searchBy,
    };
}

function matchDispatchToProps(dispatch) {
    return {
        setFilter: value => dispatch(setSearchFilter(value)),
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchButtonToolbar);
