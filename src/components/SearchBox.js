import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

import * as pageTexts from '../constants/pageTexts';

import SearchButtonToolbar from './SearchButtonToolbar';
import setSearchText from '../actions/setSearchText';
import setFilterCriteria from '../actions/setFilterCriteria';

const formStyle = {
    paddingRight: '20px',
    paddingLeft: '20px',
    maxWidth: 1200,
}

class SearchBox extends React.Component {
    
    render() {
        return (
            <Form style={formStyle} onClick={() => {this.props.setFilterCriteria({text: this.props.searchText, by: this.props.filterBy}); return false;}}>
                <FormGroup controlId="searchBox">
                <ControlLabel>{pageTexts.CAPTION_SEARCH_TITLE}</ControlLabel>
                <FormControl
                    type="text"
                    autoComplete={'off'}
                    placeholder={pageTexts.CAPTION_SEARCH_FIELD}
                    onChange={(e) => this.props.setText(e.target.value)} />
                </FormGroup>
                <FormControl.Feedback />
                <SearchButtonToolbar />
            </Form>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchText: state.textFromSearchField,
        filterBy: state.searchByFilter
    }
}

function matchDispatchToProps(dispatch) {
    return {
        setText: (value) => dispatch(setSearchText(value)),
        setFilterCriteria: (filterObj) => dispatch(setFilterCriteria(filterObj))
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchBox);
