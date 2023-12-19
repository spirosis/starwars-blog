import React from 'react';
import * as ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes/root.jsx';
import { FavoritesContext } from './Context';
import Vehicles from './components/Vehicles';
import Planets from './components/Planets';
import People from './components/People';

import Planet from './components/Planet';
import Person from './components/Person';
import Vehicle from './components/Vehicle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/People',
        element: <People />
      },
      {
        path: '/Planets',
        element: <Planets />
      },
      {
        path: '/Vehicles',
        element: <Vehicles />
      },
      {
        path: '/planets/:planetId',
        element: <Planet />
      },
      {
        path: 'people/:personId',
        element: <Person />,
      },
      {
        path: 'vehicles/:vehicleId',
        element: <Vehicle />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesContext>
      <RouterProvider router={router} />
    </FavoritesContext>
  </React.StrictMode>
);