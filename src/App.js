import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hallo ihr lieben Schnückebeers!
        </a>
      </header>
    </div>
  );
}

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
