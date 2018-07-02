import React from 'react';
import { Provider } from 'react-redux';

import BuildRouter from './Routes';
import ErrorBoundary from './ErrorBoundary';

// import background from '../../images/netflix-background-8.png';
import * as texts from '../../constants/pageTexts';

// const sectionStyle = {
//     width: '100%',
//     heigth: '400px',
//     backgroundImage: `url(${{ background }})`,
// };

// var homeBody = document.getElementById("body");
// if (homeBody != null)
//     homeBody.background = background;

export default (Router, context, location, store) => {
    const MyRouter = BuildRouter(Router, context, location);

    return () => <Provider store={ store }>
        <ErrorBoundary message={texts.ERROR_BOUNDARY_APP_MESSAGE}>
            <MyRouter />
        </ErrorBoundary>
    </Provider>;
};
