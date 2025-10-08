import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/Error/ErrorPage';
import Home from '../Pages/Home/Home';
import AllApps from '../Pages/AllApps/AllApps';
import AppDetails from '../Pages/AppDetails/AppDetails';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            loader: () => fetch('/AppData.json'),
            path: "/",
            Component: Home
        },
        {
          path: "/all-apps",
          loader: () => fetch('/AllAppData.json'),
          Component: AllApps
        },
        {
          path: "/appDetails/:id",
          loader: () => fetch('/AllAppData.json'),
          Component: AppDetails
        }
    ]
  },
]);

export default router;