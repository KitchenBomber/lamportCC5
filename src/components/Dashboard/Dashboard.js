import React, { Component } from 'react';

// THIS COMPONENT IS OUR STATUS PAGE
// YOU SHOULD DISPLAY THE CURRENT SPEED FROM SECTION ONE
// YOU SHOULD DISPLAY THE COUNT OF PEOPLE CURRENTLY ON BOARD

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        
        <p>SPEED: {JSON.stringify(this.props.reduxState)}</p>
        <p>PASSENGER COUNT: {JSON.stringify(this.props.reduxState)}</p>
      </div>
    )
  }
}

export default Dashboard;