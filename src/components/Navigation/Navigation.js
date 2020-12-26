import React from 'react';
import '../Navigation/Navigation.css'

const Navigation = () => {
    return(
        <nav className="nav-bar" style={{display: 'flex', justifyContent: 'space-between'}}>
            <h2>FAICE</h2>
            <a href="/">Sign Out</a>
        </nav>
    );
}

export default Navigation; 