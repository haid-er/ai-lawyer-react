import { Navigate } from 'react-router-dom';
import Layout from './containers/layout/Layout';
import Login from "./containers/auth/Login"
import Register from "./containers/auth/Register"
import Home from "./containers/home/Home"
import Profile from "./containers/home/Profile"
import Auth from "./containers/auth/Auth"
import ProtectedRoutes from './containers/user/ProtectedRoutes';

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '', exact: true, element: <Navigate to="/auth" /> },
            {
                path: '/user',
                exact: true,
                element: <ProtectedRoutes />,
                children: [
                    { path: '/user/home', exact: true, element: <Home /> },
                    { path: '/user/profile', exact: true, element: <Profile /> },
                ]
            },
            { path: '*', element: <Navigate to="/auth/login" /> },
            {
                path: '/auth',
                element: <Auth />,
                children: [
                    { path: '', exact: true, element: <Navigate to="/auth/login" /> },
                    { path: '/auth/login', exact: true, element: <Login /> },
                    { path: '/auth/register', exact: true, element: <Register /> },
                ]
            }
        ],
    },

];

export default routes;
