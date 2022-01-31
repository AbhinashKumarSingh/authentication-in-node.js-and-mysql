import  Axios  from 'axios';
import React ,{useState}from 'react';
import { useNavigate } from 'react-router-dom';

function Register(){
    const navigate=useNavigate()
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const Handle=async(e)=>{
        
        e.preventDefault()
            const {data}=await Axios.post('http://localhost:5000/users/register',{email,password});
            
            alert(data.message)
            navigate('/login')
    }

    return (
        <div className="login2">
        <div className="login">
            <form onSubmit={Handle} className="form">
            <div>
            <div>
            <input type='email' placeholder='Enter Your email' onChange={(e)=>setEmail(e.target.value)}>

            </input>
            </div>
            <div>
            <input type='password' placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)}>

            </input>
            </div>
            <div>
            <button type='submit'>SignUp </button>
            </div>
            </div>
            </form>
        </div>
        </div>
    )
}

export default Register
