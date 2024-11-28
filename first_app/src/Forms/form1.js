import { useState } from 'react';

function Form(){
    const [data, setData] = useState({});

    const handleChange =(e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        alert(`your email is: ${data.email} and your name is: ${data.name}`)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Enter your Email: <input
                 name='email'
                  type='email'
                  value={data.email} 
                  onChange={ handleChange }
                  />
                Enter your Name: <input
                  type='name'
                  name='name'
                  value={data.name}
                  onChange={ handleChange }
                  />
            </label>

            <input type='submit'/>
        </form>
        </>
    );
}


export default Form;