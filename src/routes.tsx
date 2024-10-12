import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import About from './pages/About';

const Routes = () => {
    const routes = createBrowserRouter([
        {
            path: '/teste2/',
            element: <Home/>,
            errorElement: <ErrorPage/>
        },
        {
            path: '/teste2/about/',
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