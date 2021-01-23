import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    const fbScript = document.createElement('script');
    fbScript.src = 'https://connect.facebook.net/en_US/fbinstant.6.2.js';
    fbScript.id = 'fb-instant';
    document.body.appendChild(fbScript);
    fbScript.onload = () => {
      window.FBInstant.initializeAsync().then(() => {
        window.FBInstant.startGameAsync().then();
      });
    }
  }, [])

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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
