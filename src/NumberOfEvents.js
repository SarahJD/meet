import React, { Component } from 'react';

class NumberOfEvents extends Component {
  constructor() {
    super();
    
    this.state = {
    numberInput: '32'
    }
  }

  handleInputNumberChange = (event) => {
    const value = event.target.value;
    this.setState ({
      numberInput: value
    });
  }

  render() {
    return(
      <div className="NumberofEvents">
        <label className="label-number">Number of Events: </label>
        <input
          type="text"
          className="number"
          value={this.state.numberInput}
          onChange={this.handleInputNumberChange}
        />
      </div>
    )
  }
}

export default NumberOfEvents;