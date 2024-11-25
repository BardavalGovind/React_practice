import React, { useContext } from "react";
import MyContext from "./Context";

const Child = ()=>{
    const user = useContext(MyContext);
    return(
        <div>
            <h3>Child Component</h3>
            <p>User: {user}</p>
        </div>
    );
}

export default Child;


