import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { AuthContext } from '../components/Auth/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h1>Travel Itinerary</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/itinerary">Itineraries</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        {!user ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        ) : (
          <li><Link to="/logout" onClick={logout}>Logout</Link></li>
        )}
      </ul>
    </nav>   
  );
};

export default Navbar;
