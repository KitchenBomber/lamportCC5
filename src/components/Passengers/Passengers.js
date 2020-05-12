import React, { Component } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {

handleChange = (event, property)=>{
  console.log("in handleChange");
  this.setState({
    passenger: event.target.value
  })
} 

  addPassenger = ()=>{
  console.log('in addPassenger', this.state.passenger);
  if(this.state.passenger){
    this.props.dispatch({ type: "newCrew", payload: this.state.passenger});
  }
}



  render() {
    return (
      <div>
        <h2>Passengers</h2>

        <input type="text" name="name" placeholder="Enter Name" onChange={this.handleChange}/>
        <button onClick={this.addPassenger}>Add Passenger</button>

        <ul>PASSENGER LIST: {this.props.reduxState.passengers}</ul>
      
      </div>
    )
  }
}

export default Passengers;