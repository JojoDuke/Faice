import React, { Component } from 'react';
import '../FaceRecogBox/FaceRecogBox.css'

class FaceRecogBox extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="brokenlines-container">
                    <h3>Drag and drop to upload <br/> Or <strong>browse</strong> this device</h3>
                </div>
            </div>
        );
    }
}

export default FaceRecogBox;
