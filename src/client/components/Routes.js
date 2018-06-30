import React from 'react';
import { HashRouter as Router, Route, Switch, IndexRoute, browserHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SearchBox from './SearchBox';
import AppContainer from './AppContainer';
import AppHeader from './AppHeader';
import FilmFullDetail from './FilmFullDetail';
import NotFound from './NotFound';
import Root from './Root';

class Routes extends React.Component {
    componentDidMount() {
        if ((!this.props.movies) || !this.props.movies.length) {
            this.props.loadMovies();
        }
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Switch>
                    <Route exact path="/" component={Root} />
                    <Route path="/search/:filter :text" component={AppContainer} />
                    <Route path="/movie/:id" component={FilmFullDetail} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

Routes.propTypes = {
    loadMovies: PropTypes.func,
    movies: PropTypes.arrayOf(PropTypes.object)
}

function mapStateToProps(state) {
    return {
        movies: state.movies && state.movies.data && Array.isArray(state.movies.data) ? state.movies.data : new Array(),
    }
}

function matchDispatchToProps(dispatch) {
    return {
        loadMovies: () => dispatch(loadMovies()),
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(Routes);
