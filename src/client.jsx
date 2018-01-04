import React from 'react';
import { hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom';
import App from './app';

const render = Component => hydrate(
    <AppContainer key={Math.random()}>
        <BrowserRouter>
            <Component />
        </BrowserRouter>
    </AppContainer>
    , document.getElementById('root')
);
render(App);

if (module.hot) {
    module.hot.accept('./app', () => {
        const NextApp = require('./app').default
        render(App)
    })
}