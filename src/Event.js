import React, { Component } from 'react';

class Event extends Component {
  constructor() {
    super();
    
    this.state = {
      showDetails: false
    }
  }

  handleShowDetails = () => {
    if(this.state.showDetails === false) {
      this.setState({ showDetails: true });
    } else { 
      this.setState({ showDetails: false });
    }
  };

  render() {
    return (
      <div className="Event">
        <div className="summary"></div>
        <div className="start"></div>
        <div className="atsummary"></div>
        <div className="location"></div>
        <button className="btn-details" onClick={this.handleShowDetails}></button>
        <div className="details"> 
          <div className="about-header"></div>
          <a href="#" className="calendar-link" />
          <div className="description"></div>
          <button className="btn-hide-details" onClick={this.handleShowDetails}></button>
        </div>
      </div>
    );
  }
}

export default Event;