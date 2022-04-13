import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    // 1st
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [rePassword,setRePassword] = useState('');
    const [error,setError] = useState('');
    //4th
    const navigate = useNavigate();
    // 3rd account create function
    const [createUserWithEmailAndPassword,user,loading] = useCreateUserWithEmailAndPassword(auth);

    // 2nd
    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    const handleRePasswordBlur = event =>{
        setRePassword(event.target.value);
    }
    //4th-a| account create hole user ke shop e pathbo
        if (user) {
            navigate('/shop');
        }

    const handleCreateUser = event =>{
        event.preventDefault();
        // validation ERROR Condition
        if (password !== rePassword){
            setError('Your Password did not match!');
            return;
        }
        if (password.length<6) {
            setError('password minimum must be 6 characters or longer!')
            return;
        }
     //3rd-a
     createUserWithEmailAndPassword(email,password);
    }

 
    return (
        <div className='form-container'>
        <div>
            <h1 className='form-title'>Sign Up</h1>
            <form onSubmit={handleCreateUser}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input onBlur={handleRePasswordBlur}type="password" name="confirm-password" id="" required/>    
                </div>
                {/* error showing & spinner in ui */}
                {loading && <p className='spinner'></p>}
                <p className='error'>{error}</p>
                <input className='form-submit' type="submit" value="Sign Up" />
            </form>
                             {/* FORM END  */}

            <p>
             Already Have an Account? <Link className='form-link' to="/login">Login</Link>
            </p>
            <div className="hr-area"><hr/>
                  <p className='or'>OR</p>
            </div>
        </div>
    </div>
    );
};

export default SignUp;