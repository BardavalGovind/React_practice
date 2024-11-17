import React, { useState } from 'react';

function Status(){
    const [status, setStatus] = useState('guest');

    const renderStatus = ()=>{
        switch(status){
            case 'guest':
                return <h1>Welcome, Guest!</h1>
            case 'user':
                return <h1>Welcome, User!</h1>
            case 'admin':
                return <h1>Welcome, Admin!</h1>
            default:
                return <h1>Please log in</h1>
        }
    };
    return(
        <div>
            {renderStatus()}
            <button onClick={()=> setStatus('guest')}>Guest</button>
            <button onClick={()=> setStatus('user')}>User</button>
            <button onClick={()=> setStatus('admin')}>Admin</button>
            <button onClick={()=> setStatus('')}>Login</button>
        </div>
    );
}

export default Status;
