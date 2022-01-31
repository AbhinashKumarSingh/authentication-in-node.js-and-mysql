import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { bake_cookie } from 'sfcookies';


function Login() {
    //const cookie=Cookies();
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const Handle = async (e) => {
        e.preventDefault();
        const { data } = await Axios.post('http://localhost:5000/users/login', { email, password });
        
        localStorage.setItem('userInfo', JSON.stringify(data))
        //cookie.set('jwtttt',data.data.token)
        bake_cookie('jwtttt', data.token);
        navigate('/')
    }

    return (
        <div className="login2" >
            <div className="login">
                <form onSubmit={Handle} className="form">
                    <div className="form-contents">
                        <div>
                            <input type='email' placeholder='Enter Your Name' onChange={(e) => setEmail(e.target.value)} required>

                            </input>
                        </div>
                        <div>
                            <input type='password' placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} required>

                            </input>
                        </div>
                        <div>
                            <button type='submit'>SignIn </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
