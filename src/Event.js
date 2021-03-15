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
        <section className="overview">
          <h2 className="summary"></h2>
          <p className="start"></p>
          <p className="atsummary"></p>
          <p className="location"></p>
          <button className="btn-details" onClick={this.handleShowDetails}></button>
        </section>
        <section className="details"> 
          <h3 className="about-header"></h3>
          <p className="htmlLink"></p>
          <p className="description"></p>
          <button className="btn-hide-details" onClick={this.handleShowDetails}></button>
        </section>
      </div>
    );
  }
}

export default Event;