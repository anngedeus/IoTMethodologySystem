import React, {Component} from 'react';
import './App.css';
import Landing from './components/Landing.js'

class App extends Component{
  render() {
    return (
      <div  className='container'>
         <Landing/>
      </div>
    );
  }
}

export default App;
