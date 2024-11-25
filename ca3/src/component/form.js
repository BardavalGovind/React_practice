import {useState} from "react";
function MyForm(){
    const [userData, setUserData] = useState({
        name: '',
        email: '',
    });

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log("Submitted data: ", userData);
    };
    const handleInputChange = (event)=>{
        const {name, value} = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
                type="text"
                name="name"
                onChange={handleInputChange}
                value={userData.name}
                placeholder="Enter your name"
            />
            <label> Email: </label>
            <input
            type="email"
            name="email"
            onChange={handleInputChange}
            value={userData.email}
            placeholder="Enter your email"
            />
            <button type="submit">Submit</button>
        </form>
        </>
    );
}
export default MyForm;