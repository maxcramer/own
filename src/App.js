import React from 'react';
import './App.css';
import Menu from './components/menu/menu';
import ProRiders from './components/proRiders/proRiders';


function App(pageName) {
  return (
    <div className="App">
      <header className="App-header">
      <Menu />
      </header>
      <body>
      <ProRiders />
      </body>
    </div>
  );
}

export default App;




// <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//         </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//         </a>