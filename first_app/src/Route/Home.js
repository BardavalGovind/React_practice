import { Link } from "react-router-dom";
const Home = ()=>{
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/Contact">contact</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}
export default Home;