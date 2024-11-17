import React from 'react';
import {useState, useEffect} from 'react';

function CarDetails(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1);
        }, 1000);
    },[count]);

    return(
        <h1>increase the count by: {count} times!</h1>
    );
}
export default CarDetails;
