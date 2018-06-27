import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

import SearchButtonToolbar from './SearchButtonToolbar';
import {search} from '../actions/search';
import * as filters from '../constants/filters';

const formStyle = {
    paddingRight: '20px',
    paddingLeft: '20px',
    maxWidth: 1200,
}

class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchText: '', selectedFilter: filters.SEARCH_BY_TITLE }
    }

    // SOURCE COMMENTED: IT WILL ACCEPT ANY INPUT
    getValidationState() {
        // const length = this.state.searchText.length;
        // if (length > 1) return 'success';
        // else if (length > 0) return 'error';
        return null;
    }

    handleSetFilterByTitle(e) {
        e.preventDefault();
        this.setState({
            searchText: this.state.searchText,
            searchFilter: filters.SEARCH_BY_TITLE
        });
    }

    handleSetFilterByGenre(e) {
        e.preventDefault();
        this.setState({
            searchText: this.state.searchText,
            searchFilter: filters.SEARCH_BY_GENRE
        });
    }

    handleChange(e) {
        try {
            if (e == null)
                return;
            else if (e.target == null)
                return;

            this.setState({ value: e.target.value });
        } catch (err) {
            console.log(err.message);
        }
    }

    render() {
        return (
            <Form style={formStyle}>
                <FormGroup controlId="searchBox" validationState={this.getValidationState()}>
                <ControlLabel>{this.props.title}</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.searchText}
                    placeholder={this.props.caption}
                    onChange={this.handleChange.bind(this)} />
                </FormGroup>
                <FormControl.Feedback />
                {/* <HelpBlock>At least two letters. If not found, no results will be displayed.</HelpBlock> */}
                <SearchButtonToolbar
                    title={this.props.toolbarButtonCaption}
                    btnByTitleCaption={this.props.btnByTitleCaption}
                    btnByGenreCaption={this.props.btnByGenreCaption}
                    onSetByTitle={this.handleSetFilterByTitle}
                    onSetByGenre={this.handleSetFilterByGenre} />
            </Form>
        );
    }
}

SearchBox.defaultProps = {
    btnByGenreCaption: 'GENRE',
    btnByTitleCaption: 'TITLE',
    toolbarButtonCaption: 'SEARCH BY',
    caption: 'Search ...',
    title: 'FIND YOUR MOVIE'
}

function mapStateToProps(state) {
    return {
        searchText: state.searchText,
        searchFilter: state.selectedFilter
    }
}

export default connect(mapStateToProps)(SearchBox);
