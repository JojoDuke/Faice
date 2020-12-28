import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import LinkInput from './components/LinkInput/LinkInput';
import FaceRecogBox from './components/FaceRecogBox/FaceRecogBox';

class App extends Component {
  // Class State
  state = {
    input: ''
  }

  onInputChange = (e) => {
    console.log(e.target.value);
  }

  onBtnSubmit = () => {
    console.log('click');
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
