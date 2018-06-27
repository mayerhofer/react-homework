import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import * as pageTexts from '../constants/pageTexts';

// TODO: remover imports
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SearchButtonToolbar from './SearchButtonToolbar';
import setTextSearchRx from '../reducers/setTextSearchRx';
import { setSearchText } from '../actions/search';
import * as filters from '../constants/filters';
import * as types from '../constants/actionTypes';

const formStyle = {
    paddingRight: '20px',
    paddingLeft: '20px',
    maxWidth: 1200,
}

// handleSetFilterByTitle(e) {
//     e.preventDefault();
//     this.setState({
//         searchText: this.state.searchText,
//         searchFilter: filters.SEARCH_BY_TITLE
//     });
// }
// handleSetFilterByGenre(e) {
//     e.preventDefault();
//     this.setState({
//         searchText: this.state.searchText,
//         searchFilter: filters.SEARCH_BY_GENRE
//     });
// }

// handleChange(e) {
//     try {
//         if (e == null)
//             return;
//         else if (e.target == null)
//             return;

//         this.setState({ searchText: e.target.value });
//         console.log(setTextSearchRx);
//         this.props.setTextSearch(this.state, setSearchText(e.target.value));
//     } catch (err) {
//         console.log(err.message);
//     }
// }

const SearchBox = ({ onChange }) => {
    return (
        <Form style={formStyle}>
            <FormGroup controlId="searchBox">
            <ControlLabel>{pageTexts.CAPTION_SEARCH_TITLE}</ControlLabel>
            <FormControl
                type="text"
                value={this.state.searchText}
                placeholder={pageTexts.CAPTION_SEARCH_FIELD}
                onChange={(e) => onChange(e.target.value)} />
            </FormGroup>
            <FormControl.Feedback />
            <SearchButtonToolbar />
        </Form>
    );
}

SearchBox.propTypes = {
    onChange: PropTypes.func
}

function mapStateToProps(state) {
    return {
        searchText: state.searchText,
        searchFilter: state.selectedFilter
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setTextSearch: setTextSearchRx}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
