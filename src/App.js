import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import * as texts from './constants/pageTexts';
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
homeBody.background = background;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        };
    }

    componentDidMount() {
        if (!this.props.movies.data.length) {
            this.props.loadMovies();
        }
    }

    render() {
        return (
            <Provider store={configureStore}>
                <AppHeader title={texts.APP_HEADER_TITLE} />
                <AppContainer />
            </Provider>
        );
    }
}

function mapStateToProps(state) {
    return {movies: state.movies.data};
}
function mapDispatchToProps(dispatch) {
    return {loadMovies: () => dispatch(loadMovies())};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
