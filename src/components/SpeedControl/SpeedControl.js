import React, { Component } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {

speedUp = ()=>{
  console.log('in speedUp');
  this.props.dispatch({ type: "faster" })
}

  speedDown = () => {
    console.log('in speedUp');
    this.props.dispatch({ type: "slower", payload: 1 })
  }

  render() {
    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick={this.speedUp}>Increase Speed</button>
        <p>SPEED: {this.props.reduxState.speed}</p>
        <button onClick={this.speedDown}>Decrease Speed</button>
      </div>
    )
  }
}

export default SpeedControl;