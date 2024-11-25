import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Header=()=>{
    const { theme }  = useContext(ThemeContext);

    return(
        <header style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff"}}>
            <h1>Theme toggler</h1>
        </header>
    );
}
export default Header;



