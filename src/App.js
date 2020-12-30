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

  calculateFaceLocation = (data) => {

  };

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
        ...this.state,
        imageUrl: this.state.input,
        isDivVisible: false
      });
    }

    // Detect image
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.calculateFaceLocation(response))
      .catch(err => alert(err)); /* PLEASE COME BACK TO CUSTOMIZE THIS */
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
        />
      </div>
    );
  }
}

export default App;
