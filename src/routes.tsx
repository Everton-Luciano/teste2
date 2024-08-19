import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route Component={Home} path="/"/>
            <Route Component={About} path="/about"/>
        </BrowserRouter>
    );
}

export default Routes;