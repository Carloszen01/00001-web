import React from 'react';
import Home from './Home';

import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css';

const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/*',
    element: <Navigate to="/" />
  },
  {
    path: '/compra',
    element: <Navigate to="/" />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);