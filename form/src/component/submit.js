import React, {useState} from "react";
function FormApp(){
    const [formData, setFormData] = useState({name: '', email: '', position: ''});
    const [errors, setErrors] = useState({});
    const [isSubmitted, setisSubmitted] = useState(false);

    const handleChange=(e)=>{
        const{name, value} = e.target;
        setFormData({...formData, [name]:value})
    }


    const ValidationForm=()=>{
        const formErrors={};
        if(!formData.name){
            formErrors.name='Name is required';
        }
        if(!formData.email){
            formErrors.email='Email is required';
        }
        else if( /\S+@\S+\.\S+/.test(formData.email)){
            formErrors.email = 'Email is not valid';
        }
        setErrors(formErrors)
            return Object.keys(formErrors).length===0;
    }

    const handleSubmit=()=>{
        setisSubmitted(false);
        if(ValidationForm()){
            console.log('form data is submitted', formData)
            setisSubmitted(true)
            setFormData({name:'', email:''})

        }
    }

    return(
        <div>
            <h1>form</h1>
            {isSubmitted && <p>Form is successfully submitted</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                       <input
                       type="text"
                       id="name"
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                       ></input>     
                       {errors.name && <p>{errors.name}</p>}
                    </div>

                    <div>
                        <label>Email:</label>
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
                        <label>Job Application Applied For:</label>
                        <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        >
                            <option>Select a Position</option>
                            <option>Developer</option>
                            <option>Designer</option>
                            <option>Data Science Engg.</option>
                        </select>
                        {errors.position && <p>{errors.position}</p>}
                    </div>
                    <button>Submit</button>
             </form>
        </div>
    );
}

export default FormApp;