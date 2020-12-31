import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import LinkInput from "./components/LinkInput/LinkInput";
import FaceRecogBox from "./components/FaceRecogBox/FaceRecogBox";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "8e2353e633e346fc8fe9412deb92ca7a"
});

class App extends Component {
  // Class State
  state = {
    input: "",
    imageUrl: "",
    isDivVisible: true,
    box: {}
  };

  calculateFaceLocation = (faceData) => {
    const clarifaiFace = faceData.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col,
      topRow: clarifaiFace.top_row,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  };

  displayBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  };

  onBtnSubmit = () => {
    if (this.state.input !== ""){
      // Change state
      this.setState({
        //...this.state,
        imageUrl: this.state.input,
        isDivVisible: false
      });
    }

    // Detect image
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayBox(this.calculateFaceLocation(response)))
      .catch(err => alert('An error'));
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <LinkInput
          onInputChange={this.onInputChange}
          onBtnSubmit={this.onBtnSubmit}
        />
        <FaceRecogBox
          imageUrl={this.state.imageUrl}
          isDivVisible={this.state.isDivVisible}
          box={this.state.box}
        />
      </div>
    );
  }
}

export default App;
