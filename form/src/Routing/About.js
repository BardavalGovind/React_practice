import {Link} from "react-router-dom";
const About=()=>{
    return(
        <div>
           <h3>Welcome to About page</h3> 
           <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                
            </ul>
           </nav>
        </div>
    );
}
export default About;