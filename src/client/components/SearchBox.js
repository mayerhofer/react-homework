import React from 'react';
import {
    Form, FormGroup, ControlLabel, FormControl,
} from 'react-bootstrap';
import { connect } from 'react-redux';

import * as pageTexts from '../../constants/pageTexts';

import SearchButtonToolbar from './SearchButtonToolbar';
import { setSearchText } from '../actions/formActions';
import { setSearchFilter } from '../actions/setFilterCriteria';

const formStyle = {
    paddingRight: '20px',
    paddingLeft: '20px',
    maxWidth: 1200,
    color: 'yellow',
};

class SearchBox extends React.Component {
    formSubmitEvent(e) {
        this.props.setFilterCriteria({ text: this.props.searchText, searchBy: this.props.filterBy, sortBy: 'title' });
        e.preventDefault();
    }

    render() {
        return (
            <Form style={formStyle} onSubmit={(e) => { this.formSubmitEvent(e); }}>
                <FormGroup controlId="searchBox">
                    <ControlLabel>{pageTexts.CAPTION_SEARCH_TITLE}</ControlLabel>
                    <FormControl
                        type="text"
                        autoComplete={'off'}
                        placeholder={pageTexts.CAPTION_SEARCH_FIELD}
                        onChange={e => this.props.setText(e.target.value)} />
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
        filterBy: state.searchByFilter,
    };
}

function matchDispatchToProps(dispatch) {
    return {
        setText: value => dispatch(setSearchText(value)),
        setFilterCriteria: filterObj => dispatch(setSearchFilter(filterObj)),
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchBox);
