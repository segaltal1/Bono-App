import {createBrowserRouter} from 'react-router-dom';

//Layouts
import {Layout} from "../Components/Layouts";

//routes
import {routes} from './allRoutes';


export const router = createBrowserRouter(
    [

        ...routes.map((route, index) => ({
            path: route.path,
            element: (
                    <Layout>
                        {route.component}
                    </Layout>
            ),
            key: index,
        })),
    ]
);
