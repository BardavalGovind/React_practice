import React, { useState } from 'react';

function Greeting() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    if (isLoggedIn) {
        return (
            <div>
                <h1>Welcome back, User!</h1>
                <button onClick={toggleLogin}>Logout</button>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Please log in</h1>
                <button onClick={toggleLogin}>Login</button>
            </div>
        );
    }
}

export default Greeting;
