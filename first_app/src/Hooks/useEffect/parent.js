import React, { Children } from "react";
import Child from "./child";

const Parent = ({ user }) => {
    return(
        <div>
            <h2>Parent Component</h2>
            <Child/>
        </div>
    );
};
export default Parent;

