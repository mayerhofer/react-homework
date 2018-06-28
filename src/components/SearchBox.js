import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import * as pageTexts from '../constants/pageTexts';

import SearchButtonToolbar from './SearchButtonToolbar';

const formStyle = {
    paddingRight: '20px',
    paddingLeft: '20px',
    maxWidth: 1200,
}

const SearchBox = ({ onChange }) => {
    return (
        <Form style={formStyle}>
            <FormGroup controlId="searchBox">
            <ControlLabel>{pageTexts.CAPTION_SEARCH_TITLE}</ControlLabel>
            <FormControl
                type="text"
                autoComplete={'off'}
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

export default SearchBox;
