import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import About from './pages/About';

const Routes = () => {
    const routes = createBrowserRouter([
        {
            path: 'https://everton-luciano.github.io/teste2/',
            element: <Home/>,
            errorElement: <ErrorPage/>
        },
        {
            path: '/about',
            element: <About/>,
            // errorElement: <ErrorPage/>
        }
    ]);

    return (
        <>
            <RouterProvider router={routes}/>
        </>
    );
}

export default Routes;