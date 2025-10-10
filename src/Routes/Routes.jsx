import React, { Suspense } from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/Error/ErrorPage';
import Home from '../Pages/Home/Home';
import AllApps from '../Pages/AllApps/AllApps';
import AppDetails from '../Pages/AppDetails/AppDetails';
import InstalledApps from '../Pages/InstalledApps/InstalledApps';
import AppError from '../Pages/Error/AppError';
// import LoadingSpinner from '../Pages/LoadingSpinner/LoadingSpinner';

// const appPromise = fetch('/AllAppData.json').then(res => res.json());

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
          // element: <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
          //   <AllApps appPromise={appPromise}></AllApps>
          // </Suspense>
          Component: AllApps
        },
        {
          path: "/appDetails/:id",
          loader: () => fetch('/AllAppData.json'),
          Component: AppDetails,
          errorElement: <AppError></AppError>
        },
        {
          path: "/installedApps",
          loader: () => fetch('/AllAppData.json'),
          Component: InstalledApps
        }
    ]
  },
]);

export default router;