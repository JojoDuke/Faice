import React from 'react';
import '../LinkInput/LinkInput.css';

const LinkInput = () => {
    return(
        <div className="input-container">
            <input className="link-input" type="text"/>
            <button>Detect</button>
        </div>
    );
}

export default LinkInput;