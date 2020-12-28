import React from 'react';
import '../LinkInput/LinkInput.css';

const LinkInput = ({ onInputChange, onBtnSubmit }) => {
    return(
        <div className="input-container">
            <input className="link-input" type="text" onChange={onInputChange}/>
            <button onClick={onBtnSubmit}>Detect</button>
        </div>
    );
}

export default LinkInput;