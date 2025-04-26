import { Navigate } from 'react-router-dom';
import Layout from './containers/layout/Layout';
import Login from './components/Login';
import Register from './components/Register';
import Profile from "./containers/user/Profile"
import Auth from "./containers/auth/Auth"
import PublicHome from './containers/publicHomeLayout/PublicHome'
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
import Blog from "./components/Blog"
import HomeLayout from "./containers/publicHomeLayout/HomeLayout"
import ProtectedRoutes from './containers/user/ProtectedRoutes';
import UserHome from './containers/user/UserHome';
const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '', exact: true, element: <Navigate to="/auth" /> },
            { path: '*', element: <Navigate to="/auth/login" /> },
            {
                path: '/home',
                exact: true,
                element: <HomeLayout />,
                children: [
                    { path: '/home', exact: true, element: <PublicHome /> },
                    { path: '/home/faqs', exact: true, element: <FAQ /> },
                    { path: '/home/blog', exact: true, element: <Blog /> },
                    { path: '/home/contact', exact: true, element: <Contact /> },

                ]
            },
            {
                path: '/auth',
                element: <Auth />,
                children: [
                    { path: '', exact: true, element: <Navigate to="/auth/login" /> },
                    { path: '/auth/login', exact: true, element: <Login /> },
                    { path: '/auth/register', exact: true, element: <Register /> },
                ]
            },
            {
                path: '/user',
                exact: true,
                element: <ProtectedRoutes />,
                children: [
                    { path: '', exact: true, element: <UserHome /> },
                    { path: '/user/home', exact: true, element: <UserHome /> },
                    { path: '/user/profile', exact: true, element: <Profile /> },
                ]
            },
        ],
    },

];

export default routes;
