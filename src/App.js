import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import LinkInput from './components/LinkInput/LinkInput';
import FaceRecogBox from './components/FaceRecogBox/FaceRecogBox';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '8e2353e633e346fc8fe9412deb92ca7a'
  });

class App extends Component {
  // Class State
  state = {
    input: '',
    imageUrl: ''
  }

  onInputChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  onBtnSubmit = () => {
    this.setState({
      imageUrl: this.state.input
    });

    // Detect image
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(function(response) {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    function(err) {
      // there was an error
      alert('There was an error');
    }
  );
  }

  render(){
    return(
      <div className="App">
        <Navigation/>
        <LinkInput onInputChange={this.onInputChange} onBtnSubmit={this.onBtnSubmit}/>
        <FaceRecogBox imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
