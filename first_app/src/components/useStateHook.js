import { useState } from "react";

function Car(){
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    const updateColor = () =>{
        setCar(prevState => ({
            ...prevState,
            color: "blue"
        }));
    }

    return(
        <>
            <h1>My {car.color}</h1>
            <button 
            type="button"
            onClick={updateColor}
            >Blue</button>
        </>
    );
}
export default Car;