import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';


const Login = () => {
    // 1
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // 3rd account signin function
    const [signInWithEmailAndPassword,user,loading,error ] = 
          useSignInWithEmailAndPassword(auth);
    // 2
    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
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
                    <p className='error'>{error?.message}</p>
                    {
                        loading && <p>Loading.......</p>
                    }
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
