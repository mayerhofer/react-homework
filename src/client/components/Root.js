import React from 'react';
import { Grid, Row } from 'react-bootstrap';

import ErrorBoundary from './ErrorBoundary';
import AppHeader from './AppHeader';
import AppContainer from './AppContainer';

class Root extends React.Component {
    headerRowStyle = {
        height: '100%',
    };

    render() {
        return (
            <ErrorBoundary>
                <Grid>
                    <Row style={this.headerRowStyle}><AppHeader /></Row>
                    <Row><AppContainer /></Row>
                </Grid>
            </ErrorBoundary>
        );
    }
}

export default Root;
