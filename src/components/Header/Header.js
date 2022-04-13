import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    //all link apply er por declore
    const [user] = useAuthState(auth);
    //signOut
    const handleSignOut =()=>{
        signOut(auth);
    }
    return (
        <nav className='Header'>
            <img src={logo}alt="amazon's logo"/>
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                { user?
                <button onClick={handleSignOut} className='signout-btn'>Sign Out</button>
                :
                <Link to="/login">Login</Link>
                }
                {/* <Link to="/signup">SignUp</Link> */}
            </div>
        </nav>
    );
};

export default Header;