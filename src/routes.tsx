import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

const Routes = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Home/>,
            errorElement: <div>Deu ruim</div>
        },
        {
            path: 'about',
            element: <About/>
        }
    ]);

    return (
        <RouterProvider router={routes}/>
    );
}

export default Routes;