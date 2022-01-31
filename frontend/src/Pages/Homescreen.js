import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

 import {delete_cookie} from 'sfcookies'
export default function HomeScreen(){
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.removeItem('userInfo');
        delete_cookie('jwtttt');
        navigate('/login')
    }

    return (
        <div>
            <div className='navbar'>
                
                    <ul className='navbar-content'>
                    {
                        localStorage.getItem('userInfo')?null:
                    
                        <Link  to={'/register'}><li>SignUp</li></Link>
                    }
                        {localStorage.getItem('userInfo')?<li onClick={logout}>Logout</li>:
                        <Link  to={'/login'}><li>SignIn</li></Link>}
                        {
                            <Link  to={'/userWelcome'}><li>Welcome</li></Link>
                        }
                    </ul>
                
            </div>
        </div>
    )
}