import React from 'react';
import { StaticRouter, Route, Switch } from 'react-router-dom';

import AppContainer from './AppContainer';
import FilmFullDetail from './FilmFullDetail';
import NotFound from './NotFound';
import Root from './Root';

class Routes extends React.Component {
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

export default (Router, context, location) => () => (
    <Routes context={context} location={location} />
);
