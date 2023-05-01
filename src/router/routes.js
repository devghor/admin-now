import { Login, Register } from '../pages/auth';
import { Home } from '../pages/home';
import Guard from './Guard';
import DashboardLayout from '../components/layout/dashboard/DashboardLayout';
import AuthLayout from '../components/layout/auth/AuthLayout';
import ErrorPage from '../components/page/ErrorPage';
import NotFoundPage from '../components/page/NotFoundPage';
import { pathConstant } from '../constants';
import { Permissions, Roles } from '../pages/acl';



const routes = [
  {
    path: '/',
    element:<Guard><DashboardLayout /></Guard> ,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: pathConstant.ACL_ROLES.path,
        element: <Roles />,
      },
      {
        path: pathConstant.ACL_PERMISSIONS.path,
        element: <Permissions />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: pathConstant.AUTH_REGISTER.path,
        element: <Register />,
      },
      {
        path: pathConstant.AUTH_REGISTER.path,
        element: <Login />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
