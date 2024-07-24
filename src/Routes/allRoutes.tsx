import {Navigate} from 'react-router-dom';

import {HomePage} from "../Pages/HomePage";
import {CausesPage} from "../Pages/CausesPage";
import {SignupPage} from "../Pages/SignupPage";


type RouteType = {
    path: string;
    component: JSX.Element;
    exact?: boolean;
};


export const routes: RouteType[] = [
    {path: '/', component: <HomePage/>},
    {path: '/causes', component: <CausesPage/>},
    {path: '/signup', component: <SignupPage/>},


    // this route should be at the end of all other routes
    // eslint-disable-next-line react/display-name
    {
        path: '/',
        exact: true,
        component: <Navigate to={'/'}/>,
    },
    {path: '*', component: <Navigate to={'/'}/>},
];



