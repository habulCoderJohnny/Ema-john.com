import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='Header'>
            <img src={logo}alt="amazon's logo"/>
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
                {/* <Link to="/signup">SignUp</Link> */}
            </div>
        </nav>
    );
};

export default Header;