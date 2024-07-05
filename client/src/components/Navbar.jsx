import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>Travel Itinerary</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/itinerary">Itineraries</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>   
    );
};

export default Navbar;