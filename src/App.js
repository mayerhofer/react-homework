import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/AppHeader';
import AppContainer from './components/AppContainer';
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
            <div id="bodyDiv">
                <AppHeader title="Netflix Roulette" />
                <AppContainer />
            </div>
        );
    }
}

export default App;
