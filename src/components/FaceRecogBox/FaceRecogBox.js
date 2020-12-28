import React from 'react';
import '../FaceRecogBox/FaceRecogBox.css'

const FaceRecogBox = ({ imageUrl }) => {
    return (
            <div className="main-container">
                <div className="image-container">
                    <img src={imageUrl} alt="the_img"/>
                </div>
                <div className="brokenlines-container">
                    <h3>Drag and drop to upload <br/> Or <a href="/">browse</a> this device</h3>
                </div>
            </div>
        );
}

export default FaceRecogBox;
