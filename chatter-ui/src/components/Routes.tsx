import { createBrowserRouter } from 'react-router-dom';
import Login from './auth/Login';
import SignUp from './auth/Signup';
import Home from './home/Home';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/home',
        element: <Home />,
      },
    ],
  },
]);

export default router;