import React from 'react';
import {
    Form, FormGroup, ControlLabel, FormControl,
} from 'react-bootstrap';
import { connect } from 'react-redux';

import * as pageTexts from '../../constants/pageTexts';

import SearchButtonToolbar from './SearchButtonToolbar';
import { setSearchText } from '../actions/formActions';
import { applySearch } from '../actions/loadMovies';

const formStyle = {
    marginTop: '0px',
    paddingRight: '20px',
    paddingLeft: '20px',
    maxWidth: 1200,
    color: 'yellow',
    backgroundColor: '#330033',
};

class SearchBox extends React.Component {
    formSubmitEvent(e) {
        e.preventDefault();
        console.log('skfjdgfslgjlfskjg');

        this.props.runLoad(
            this.props.filterCriteria.searchText,
            this.props.filterCriteria.filterBy,
            this.props.filterCriteria.sortBy,
        );
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
        filterCriteria: state.searchFilterCriteria,
    };
}

function matchDispatchToProps(dispatch) {
    return {
        setText: value => dispatch(setSearchText(value)),
        runLoad: (text, searchBy, sortBy) => dispatch(applySearch(text, searchBy, sortBy)),
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchBox);
