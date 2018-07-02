import React from 'react';
import {
    Grid, Row, Col, Label, Button, Glyphicon,
} from 'react-bootstrap';

const notFoundStyle = {
    align: 'center',
    color: 'yellow',
};

class NotFound extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={12}>
                        <div style={notFoundStyle}>
                            <h1><Label bsStyle="warning">Oops!</Label></h1>
                            <h2>404 Not Found</h2>
                            <div>
                                Sorry, an error has occured, Requested page not found!
                            </div>
                            <div>
                                <Button href="/" bsStyle="primary" bsSize="large">
                                    <Glyphicon glyph="home" />Take Me Home
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default NotFound;
