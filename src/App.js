import { Component } from 'react'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi Brynner!</p>
        <button>
          Change Name
        </button>
      </header>
    </div>
  );
}

}
export default App;
