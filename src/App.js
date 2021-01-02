import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import LinkInput from "./components/LinkInput/LinkInput";
import FaceRecogBox from "./components/FaceRecogBox/FaceRecogBox";
import ErrorBox from "./components/ErrorBox/ErrorBox";
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
    showModal: false,
    box: {}
  };

  calculateFaceLocation = (faceData) => {
    const clarifaiFace = faceData.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
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
      .catch(err => {
        this.setState({
          showModal: true
        });
      })
  };

  // This allows you to close the modal when done
  closeModal = () => {
    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <ErrorBox showModal={this.state.showModal}
                  closeModal={this.closeModal}
        />
        <LinkInput
          onInputChange={this.onInputChange}
          onBtnSubmit={this.onBtnSubmit}
        />
        <FaceRecogBox
          imageUrl={this.state.imageUrl}
          newImages={this.state.newImages}
          isDivVisible={this.state.isDivVisible}
          box={this.state.box}
        />
      </div>
    );
  }
}

export default App;
