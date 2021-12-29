import React, { Component } from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

class App extends Component {
  state = {
    resultImageName: '',
  };

  submitForm = imageName => {
    this.setState({
      resultImageName: imageName,
    });
  };

  render() {
    const { resultImageName } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.submitForm} />
        <ImageGallery imageName={resultImageName} />
      </div>
    );
  }
}
export default App;
