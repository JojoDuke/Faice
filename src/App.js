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
    input: ''
  }

  onInputChange = (e) => {
    console.log(e.target.value);
  }

  onBtnSubmit = () => {
    // Detect image
    app.models.predict({id:'MODEL_ID', version:'MODEL_VERSION_ID'}, "https://samples.clarifai.com/metro-north.jpg")
    .then(function(response) {
      // do something with response
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
        <FaceRecogBox/>
      </div>
    );
  }
}

export default App;
