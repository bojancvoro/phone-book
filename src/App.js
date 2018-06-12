import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneBook from "./components/container/phoneBook";

class App extends Component {
  render() {
    return (
      <div className="App">
          <PhoneBook />
      </div>
    );
  }
}

export default App;
