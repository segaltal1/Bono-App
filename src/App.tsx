import './App.css'

import {RouterProvider} from 'react-router-dom';
import {router} from "./Routes";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        console.log('App is mounted')

    }, [])

    return <RouterProvider router={router}/>;
}

export default App;