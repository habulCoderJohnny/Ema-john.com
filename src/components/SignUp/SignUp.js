import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
const SignUp = () => {
    // 1st
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [rePassword,setRePassword] = useState('');
    const [error,setError] = useState('');

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
    const handleCreateUser = event =>{
        event.preventDefault();
        // validation
        if (password !== rePassword){
            setError('Your Password did not match!');
            return;
            
        }
    }
    //3rd
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
                {/* error show in Ui */}
                <p className='rePass-error'>{error}</p>
                <input className='form-submit' type="submit" value="Sign Up" />
            </form>
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