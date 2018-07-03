import React from 'react';
import {
    Grid, Row, Col, Label, Button, Glyphicon,
} from 'react-bootstrap';

class NotFound extends React.Component {
    notFoundStyle = {
        align: 'center',
        color: 'yellow',
    };

    notFoundTitle = '404 Not Found';

    notFoundMessage = 'Sorry, an error has occured, Requested page not found!';

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={12}>
                        <div style={this.notFoundStyle}>
                            <h1><Label bsStyle="warning">Oops!</Label></h1>
                            <h2>{this.notFoundTitle}</h2>
                            <div>{this.notFoundMessage}</div>
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
