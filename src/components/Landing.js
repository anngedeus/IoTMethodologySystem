import React, {Component} from 'react';
import './Landing.css';

class Landing extends Component{

  state = { 
      pulseData: 0,
      LedState: null,
  }

  componentDidMount() {
      const url = 'https://blynk.cloud/external/api/get?token=N_YA9SXZzdLJGMMfz4rB8Oz5i3al4HE6&a0';
      setInterval(async() => {
        fetch(url).then(res => res.json()).then(res => this.setState({pulseData: res}))
      }, 1000);   
  }
  handleOn() {
    const url = 'https://blynk.cloud/external/api/update?token=N_YA9SXZzdLJGMMfz4rB8Oz5i3al4HE6&v0=1';
    fetch(url).then(res => res.json()).then(res => this.setState({LedState: res}))
  }
  handleOff() {
    const url = 'https://blynk.cloud/external/api/update?token=N_YA9SXZzdLJGMMfz4rB8Oz5i3al4HE6&v0=0'
    fetch(url).then(res => res.json()).then(res => this.setState({LedState: res}))
  }

  render() {
    return (
      <div>
        <h3>Pulse Data Center</h3>
        {this.state.pulseData} <p>BPM</p>
      <div className='container2'>
          <h3>Led Control Center</h3>
          <button className='buttonGreen' onClick={this.handleOn}>
            ON
          </button>
          <button className='buttonRed' onClick={this.handleOff}>
            OFF
          </button>
          </div>      
      </div>
    )
  }
}

export default Landing;
