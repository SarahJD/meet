import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';


class App extends Component {
  state = {
    events: [],
    locations: []
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }

  render() { 
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents />
        <EventList events={this.state.events}/>
      </div>
    );
  }
}


// FOR APP VERIFICATION (4.2)
// import Login from './Login';
// import { getEvents, checkToken } from "./api";

// function App() {

//   state = {tokenCheck: false};

//   async componentDidMount() {
//     const accessToken =
//     localStorage.getItem("access_token");
//     const validToken = accessToken !== null ? await
//     checkToken(accessToken) : false;
//     this.setState({ tokenCheck: validToken });
//     if(validToken === true) this.updateEvents()
//     const searchParams = new
//     URLSearchParams(window.location.search);
//     const code = searchParams.get("code");
//     this.mounted = true;
//     if (code && this.mounted === true && validToken
//     === false){
//     this.setState({tokenCheck:true });
//     this.updateEvents()
//     }
//     }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Hallo ihr lieben Sch??ckebeers!
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
