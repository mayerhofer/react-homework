import React from 'react';
import { Grid, Row } from 'react-bootstrap';

import ErrorBoundary from './ErrorBoundary';
import AppHeader from './AppHeader';
import AppContainer from './AppContainer';

class Root extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <Grid>
                    <Row style={{ height: '100%' }}><AppHeader /></Row>
                    <Row><AppContainer /></Row>
                </Grid>
            </ErrorBoundary>
        );
    }
}

export default Root;
