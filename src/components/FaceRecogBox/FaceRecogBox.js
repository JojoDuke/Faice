import React from 'react';
import '../FaceRecogBox/FaceRecogBox.css'

const FaceRecogBox = ({ imageUrl }) => {
    return (
        <div>
            <div className="main-container">
                <div className="brokenlines-container">
                    <h3>Drag and drop to upload <br/> Or <a href="/">browse</a> this device</h3>
                </div>
            </div>

            <div className="faces">
                <img src={imageUrl} alt="" className="faces"/>
            </div>
        </div> 
        );
}

export default FaceRecogBox;
