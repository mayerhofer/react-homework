import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' }
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 1) return 'success';
        else if (length > 0) return 'error';
        return null;
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
            <Form>
                <FormGroup controlId="searchBox" validationState={this.getValidationState()}>
                <ControlLabel>{this.props.title}</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder={this.props.caption}
                    onChange={this.handleChange.bind(this)} />
                </FormGroup>
                <FormControl.Feedback />
                <HelpBlock>At least two letters. If not found, no results will be displayed.</HelpBlock>
            </Form>
        );
    }
}

export default SearchBox;
