import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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

    render() {

        return (
            <ErrorBoundary message="We had a major error in application. Please wait for our support team to fix.">
                <AppHeader title="Netflix Roulette" />
                <AppContainer />
            </ErrorBoundary>
        );
    }
}

export default App;
