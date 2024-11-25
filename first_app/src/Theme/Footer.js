import React, {useContext} from "react";
import { ThemeContext } from "./ThemeContext";

const Footer=()=>{
    const {theme} = useContext(ThemeContext);

    return(
        <footer style={{ background: theme === "light" ? "#ddd" : "#555", color: theme === "light" ? "#000" : "#fff"}}>
            <p>@ 2024 Theme Toggler</p>
        </footer>
    );
}

export default Footer;