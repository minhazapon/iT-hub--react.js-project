import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Applied from './Applied';
import Jobs from './Jobs';
import ErrorPage from './ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage> ,

    children: [
      {
        path: "/",
        element: <Home></Home> ,
      },
      {
        path: "/Applied",
        element: <Applied></Applied> ,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs> ,
      },
    ],

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
