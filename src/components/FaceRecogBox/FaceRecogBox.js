import React from 'react';
import '../FaceRecogBox/FaceRecogBox.css'

const FaceRecogBox = ({ imageUrl, isDivVisible, box }) => {
    return (
        <div>
            <div className={`main-container ${!isDivVisible && "vanish"}`}>
                <div className="brokenlines-container">
                    <h3>Drag and drop to upload <br/> Or <a href="/">browse</a> this device</h3>
                </div>
            </div>

            <div className="faces">
                <img id="inputimage" src={imageUrl} alt="" className="faces"/>
                <div className="bounding-box" 
                     style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>

                </div>
            </div>
        </div> 
        );
}

export default FaceRecogBox;
