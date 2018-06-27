import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';

import * as texts from './constants/pageTexts';
import AppHeader from './components/AppHeader';
import AppContainer from './components/AppContainer';
import ErrorBoundary from './components/ErrorBoundary';
import background from './images/netflix-background-8.png';


const sectionStyle = {
    width: "100%",
    heigth: "400px",
    backgroundImage: "url(" + { background } + ")"
}

var homeBody = document.getElementById("body");
homeBody.background = background;

class App extends Component {
    componentDidMount() {
        persistStore(
            store,
            {
                storage: AsyncStorage,
            },
            () => {
                this.setState({ isReady: true });
            }
        );
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }

        return (
            <ErrorBoundary message={texts.ERROR_BOUNDARY_APP_MESSAGE}>
                <Provider store={store}>
                    <AppHeader title={texts.APP_HEADER_TITLE} />
                    <AppContainer />
                </Provider>
            </ErrorBoundary>
        );
    }
}

export default App;
