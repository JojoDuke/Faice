import React from 'react';
import '../ErrorBox/ErrorBox.css';

const ErrorBox = ({showModal, closeModal}) => {
    return(
        <div className={`container ${!showModal && "vanish"}`}>
            <h3>Please upload the image of a "Face"</h3>
            <button onClick={closeModal}>Close</button>
        </div>
    );
}

export default ErrorBox;