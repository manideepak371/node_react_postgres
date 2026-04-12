import React from 'react';
import ReactDom from 'react-dom/client';
import App from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ViewName from './components/ViewName';
import EditName from './components/EditName';
import {Provider} from 'react-redux';
import store from './reducer/AppStore';

const root = document.getElementById("root");

if (!root) throw new Error("root element not found");

const basePaths =window.location.pathname;
const basePath = basePaths[1];

const allowedPaths = ["static", "ssr"];

const basename = allowedPaths.includes(basePath) ? `/${basePath}` : "/"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/view", element: <ViewName />
            },
            {
                path: "/edit", element: <EditName />
            }
        ]
    },
], {
    basename
})

ReactDom.createRoot(root).render(
    <>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </>
)