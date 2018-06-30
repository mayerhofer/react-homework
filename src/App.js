import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import propTypes from 'prop-types';

import Routes from './client/components/Routes';
import background from './images/netflix-background-8.png';
import configureStore from './client/store/configureStore';

const sectionStyle = {
    width: "100%",
    heigth: "400px",
    backgroundImage: "url(" + { background } + ")"
}

var homeBody = document.getElementById("body");
if (homeBody != null)
    homeBody.background = background;

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={this.props.store}>
                <PersistGate loading={null} persistor={this.props.persistor}>
                    <Routes />
                </PersistGate>
            </Provider>
        );
    }
}

App.propTypes = {
    store: propTypes.object.isRequired,
    persistor: propTypes.object.isRequired
}

export default App;
