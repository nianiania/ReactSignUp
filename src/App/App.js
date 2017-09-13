import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from '../sign_up/sign_up';




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

          <div className="container App-main">
            <div className="row">
               <Signup className="col-sm-12"/>
            </div>
          
          </div>
      </div>
    );
  }
}

export default App;
