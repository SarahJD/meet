import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

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
//           Hallo ihr lieben Schückebeers!
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
