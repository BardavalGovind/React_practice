import React, {useState} from 'react';

function Act(){
    const [formData, setFormData] = useState({email: '', password: ''});
    const [errors, setErrors] = useState({});
    const [isSubmitted, setisSubmitted] = useState(false);

    const handleChange=(e)=>{
        const{name, value} = e.target;
        setFormData({...formData, [name]:value})
    }

    const handleSubmit=()=>{
        setisSubmitted(false);
            console.log('form data is submitted', formData)
            setisSubmitted(true)
            setFormData({name:'', email:''})

        }
    
    return(
        <div>
        <h1>form</h1>
            {isSubmitted && <p>Form is successfully submitted</p>}
            <form onSubmit={handleSubmit}>
                    <div>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        ></input>
                        {errors.email && <p>{errors.email}</p>}
                    </div>

                    <div>
                        <input
                        type='password'
                        id='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        ></input>
                        {errors.password && <p>{errors.password}</p>}
                    </div>

                    <button>Login</button>
                </form>
        </div>
    );
}

export default Act;


1,2
3,4 

2 1  [0,0 0,1
      1,0  1,1]
4 3





3,1
4,2