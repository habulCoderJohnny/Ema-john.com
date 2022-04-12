import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='Header'>
            <img src={logo}alt="amazon's logo"/>
            <div>
                <Link to="/Shop">Shop</Link>
                <Link to="/Orders">Order</Link>
                <Link to="/Inventory">Inventory</Link>
                <Link to="/About">About</Link>
            </div>
        </nav>
    );
};

export default Header;