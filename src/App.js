import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './src/Components/Navbar/Navbar';
import Signup from './Components/Signup/Signup';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container">
          <Signup/>
        </div>
      </div>
    );
  }
}

export default App;
