import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <p className='company-txt'>Meal DB</p>
            <div>
                <a href="/home">Home</a>
                <a href="/order">Order</a>
                <a href="/manage-inventory">Manage Inventory</a>
                <a href="/login">Log In</a>
            </div>
        </nav>
    );
};

export default Header;