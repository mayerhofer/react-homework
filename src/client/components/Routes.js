import React from 'react';
import { StaticRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppContainer from './AppContainer';
import FilmFullDetail from './FilmFullDetail';
import NotFound from './NotFound';
import Root from './Root';
import loadMovies from '../actions/loadMovies';

class Routes extends React.Component {
    componentDidMount() {
        if ((!this.props.movies) || !this.props.movies.length) {
            this.props.loadMovies();
        }
    }

    render() {
        return (
            <StaticRouter context={this.props.context} location={this.props.location}>
                <Switch>
                    <Route exact path="/" component={Root} />
                    <Route path="/search/:filter :text" component={AppContainer} />
                    <Route path="/movie/:id" component={FilmFullDetail} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </StaticRouter>
        );
    }
}

Routes.propTypes = {
    loadMovies: PropTypes.func,
    movies: PropTypes.arrayOf(PropTypes.object),
};

function mapStateToProps(state) {
    return {
        movies: state.movies && state.movies.data
            && Array.isArray(state.movies.data) ? state.movies.data : [],
    };
}

function matchDispatchToProps(dispatch) {
    return {
        loadMovies: () => dispatch(loadMovies()),
    };
}

export default (Router, context, location) => {
    const MyRouter = connect(mapStateToProps, matchDispatchToProps)(Routes);

    return () => <MyRouter context={context} location={location} />;
};
