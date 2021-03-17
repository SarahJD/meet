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
    const { event } = this.props;
    const showDetails = this.state.showDetails;


    return (
      <div className="Event">
        <section className="overview">
          <h2 className="summary">{event.summary}</h2>
          {/* {<div className="start-time">event.start.map((info) => (
            <p key={info}>{info}</p>))} */}
          <p className="start-time">{event.start.dateTime}</p>
          <p className="time-zone">(time zone: {event.start.timeZone})</p>
          <p className="location">{event.location}</p>
        {!showDetails && (
          <button className="btn-details" onClick={this.handleShowDetails}>show details</button>
        )}
        </section>

        {showDetails && (
        <section className="details"> 
          <h3 className="about-header">About event:</h3>
          <a className="htmlLink" href="{event.htmlLink}">{event.htmlLink}</a>
          <p className="end-time">{event.end.dateTime}</p>
          <p className="description">{event.description}</p>
          <p className="organizer-email">{event.organizer.email}</p>      
          <button className="btn-hide-details" onClick={this.handleShowDetails}>hide details</button>
        </section>
        )}
      </div>
    );
  }
}

export default Event;