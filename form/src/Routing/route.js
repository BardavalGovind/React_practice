import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact'
import Todos from './Todo';

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
        {
            path: "/todos",
            element: <Todos/>
        }

    ])

    return(
        // <h2>welcome</h2>
        <RouterProvider router={router}/>
    );
}
export default Fun;