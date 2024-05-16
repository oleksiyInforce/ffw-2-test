import React from 'react';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Main} from 'components/screens/Main/Main';
import {Layout} from './Layout';
import {Subscribe} from 'components/screens/Subscribe/Subscribe';
import {TermsOfUse} from "../../screens/TermsOfUse";
import {Privacy} from "../../screens/Privacy";

export const RootRouter = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Main/>,
                },
                {
                    path: '/subscribe',
                    element: <Subscribe/>,
                },
                {
                    path: '/terms-of-use',
                    element: <TermsOfUse/>,
                },
                {
                    path: '/privacy-policy',
                    element: <Privacy/>,
                },
            ],
        },
    ]);

    return <RouterProvider router={router}/>;
};
