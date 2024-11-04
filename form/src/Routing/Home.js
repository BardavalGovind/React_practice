import { Link } from "react-router-dom";
const Home=()=>{
    return(
        <div>
            <h3>welcome to Home page</h3>
            <nav>
                <ul>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>

    );
}
export default Home;