import React from 'react';
import {Link} from 'react-router-dom';
import'../styles/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className='welcome'>Trip Happens</h1>
            <ul className='nav-links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/itinerary">Itineraries</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>   
    );
};

export default Navbar;