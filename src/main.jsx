import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Statistic from './components/Statistic/Statistic';
import ViewDetail from './components/ViewDetail/ViewDetail';  // Updated import

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/product/:productId',  // Fixed dynamic path
        element: <ViewDetail />      // Updated to use ViewDetail component
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/statistic',
        element: <Statistic />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
