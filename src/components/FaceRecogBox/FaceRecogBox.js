import React from 'react';
import '../FaceRecogBox/FaceRecogBox.css'

const FaceRecogBox = ({ imageUrl, isDivVisible, box, fileSelect }) => {
    return (
        <div>
            <div className={`main-container ${!isDivVisible && "vanish"}`}>
                <div className="brokenlines-container">
                    <h3 className="text1">Drag and drop to upload <br/> Or <strong>browse</strong> this device</h3>
                    <h3 className="text2"><strong>Browse</strong> this device</h3>
                </div>
            </div>

            <div className="faces absolute">
                <img id="inputimage" src={imageUrl} alt=""/>
                <div className="bounding-box" 
                     style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
                </div>
            </div>
        </div> 
        );
}

export default FaceRecogBox;
