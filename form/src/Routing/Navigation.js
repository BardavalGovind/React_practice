import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Link} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
function Navigate(){
    return(
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
            </Routes>
        </Router>
    );
}
export default Navigate;