import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import propTypes from 'prop-types';

import Routes from './Routes';
import ErrorBoundary from './ErrorBoundary.js';

import configureStore from '../store/configureStore';

import background from '../../images/netflix-background-8.png';
import * as texts from '../../constants/pageTexts';

const sectionStyle = {
    width: "100%",
    heigth: "400px",
    backgroundImage: "url(" + { background } + ")"
}

var homeBody = document.getElementById("body");
if (homeBody != null)
    homeBody.background = background;

const { store, persistor } = configureStore();

window.store = store;
window.persistor = persistor;

store.subscribe(() => { console.log(store.getState()) });

class App extends Component {
    render() {
        return (
            <ErrorBoundary message={texts.ERROR_BOUNDARY_APP_MESSAGE}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Routes />
                    </PersistGate>
                </Provider>
            </ErrorBoundary>
        );
    }
}

App.propTypes = {
    store: propTypes.object.isRequired,
    persistor: propTypes.object.isRequired
}

export default App;
