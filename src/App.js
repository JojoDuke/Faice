import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import LinkInput from './components/LinkInput/LinkInput';
import FaceRecogBox from './components/FaceRecogBox/FaceRecogBox';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Navigation/>
        <LinkInput/>
        <FaceRecogBox/>
      </div>
    );
  }
}

export default App;
