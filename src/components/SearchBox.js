import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import SearchButtonToolbar from './SearchButtonToolbar';
import * as pageTexts from '../constants/pageTexts';

const formStyle = {
    paddingRight: '20px',
    paddingLeft: '20px',
    maxWidth: 1200,
}

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }

    handleChange(e) {
        try {
            if (e == null || e.target == null)
                return;

            this.setState({ value: e.target.value });
        } catch (err) {
            console.log(err.message);
        }
    }

    render() {
        return (
            <Form style={formStyle}>
                <FormGroup controlId="searchBox">
                <ControlLabel>{pageTexts.CAPTION_SEARCH_TITLE}</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder={pageTexts.CAPTION_SEARCH_FIELD}
                    onChange={this.handleChange.bind(this)} />
                </FormGroup>
                <FormControl.Feedback />
                <SearchButtonToolbar />
            </Form>
        );
    }
}

export default SearchBox;
