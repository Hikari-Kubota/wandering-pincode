import React, { Component } from 'react';
import './App.css';
import PinCodeSetting from './components/PinCodeSetting.js';
import KeyForm from './components/KeyForm.js';
import AuthResult from './components/AuthResult.js';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
        pinCodes: [],
        inputs: []
    };
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <PinCodeSetting />
          <KeyForm />
          <AuthResult />
        </div>
      </div>
    );
  }
}
