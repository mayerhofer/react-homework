import React from 'react';
import { Provider } from 'react-redux';

import BuildRouter from './Routes';
import ErrorBoundary from './ErrorBoundary';

import * as texts from '../../constants/pageTexts';

export default (Router, context, location, store) => {
    const MyRouter = BuildRouter(Router, context, location);

    store.subscribe(() => { console.log(store.getState()); });

    return () => <Provider store={ store }>
        <ErrorBoundary message={texts.ERROR_BOUNDARY_APP_MESSAGE}>
            <MyRouter />
        </ErrorBoundary>
    </Provider>;
};
