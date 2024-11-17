import React from "react";

const Child = ({user})=>{
    return(
        <div>
            <h3>Child Component</h3>
            <p>User: {user}</p>
        </div>
    );
}

export default Child;