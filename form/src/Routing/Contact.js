import { Link } from "react-router-dom";
const Contact=()=>{
    return(
        <div>
           <h3>Welcome to contact page</h3> 
           <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                
            </ul>
           </nav>
        </div>
    );
}
export default Contact;