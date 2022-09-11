import { Component } from 'react'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'Brynner', lastName: 'Ventura'},
      company: 'Google'
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi, my name is {this.state.name.firstName} {this.state.name.lastName}, and I work at {this.state.company}!</p>
        <button 
        onClick={() => {
          this.setState((state, props) => {
            return {
              name: { firstName: 'Magelyn', lastName: 'Ortiz'},
              company:  'a school' 
            };
          },
          () => {
            console.log(this.state)
          } 
          );

        }} 
        >
          Change Name 
          </button>
      </header>
    </div>
  );
}

}
export default App;
