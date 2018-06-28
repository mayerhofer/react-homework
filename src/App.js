import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import propTypes from 'prop-types';

import AppHeader from './components/AppHeader';
import AppContainer from './components/AppContainer';
import ErrorBoundary from './components/ErrorBoundary';
import background from './images/netflix-background-8.png';
import configureStore from './store/configureStore';

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
                    <AppHeader />
                    <AppContainer />
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
