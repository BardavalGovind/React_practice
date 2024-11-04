import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact'

function Fun(){
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/contact",
            element: <Contact/>
        },

    ])

    return(
        // <h2>welcome</h2>
        <RouterProvider router={router}/>
    );
}
export default Fun;