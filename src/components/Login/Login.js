import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';


const Login = () => {
    // 1
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // 3rd account signin function
    const [signInWithEmailAndPassword,user,loading,error ] = 
          useSignInWithEmailAndPassword(auth);
    //4th
    const navigate = useNavigate();
    // 5th protected page code send from requireAuth.js
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    // 2
    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    //4th-a| user Logged hole user ke order e pathbo code was: if (user) { navigate('/orders')}

    //5th-a je page visitor dokte caise se page e pathabo means Inventory page 
    if (user) {
        navigate(from, {replace:true});
    }
    const handleUserLogin = event =>{
        event.preventDefault();

    //3rd-a
    signInWithEmailAndPassword(email, password)

    }




    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handleUserLogin}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                    </div>
                    {/* error showing & spinner in ui */}
                    {loading && <p className='spinner'></p>}
                    <p className='error'>{error?.message}</p>
                    <input className='form-submit' type="submit" value="Log in" />
                </form>

                                   {/* FORM END  */}
                                   
                <p>
                    New to Ema-john? <Link className='form-link' to="/signUp">Create an account</Link>
                </p>
                <div className="hr-area"><hr/>
                  <p className='or'>OR</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
