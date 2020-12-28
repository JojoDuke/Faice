import React from 'react';
import '../Navigation/Navigation.css';
import logo from '../Navigation/thelogo.png';

const Navigation = () => {
    return(
        <nav className="nav-bar">
            <img src={logo} alt="The_Logo" style={{cursor: 'pointer', height: '40px'}}></img>
            <a href="/">Sign Out</a>
        </nav>
    );
}

export default Navigation; 