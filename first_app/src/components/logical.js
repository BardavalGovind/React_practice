import React, { useState } from "react";

function Auth(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <div>
            {isLoggedIn && <h1>Welcome back, User!</h1>}
            {!isLoggedIn && <h1>Please log in</h1>}
            <button onClick={()=> setIsLoggedIn(!isLoggedIn)}>{isLoggedIn? 'Logout' : 'Login'}</button>
        </div>
    );
}
export default Auth;