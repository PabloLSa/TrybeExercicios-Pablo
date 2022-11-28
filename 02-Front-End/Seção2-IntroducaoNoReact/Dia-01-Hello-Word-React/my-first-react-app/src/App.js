import logo from './logo.svg';
import './App.css';
import React from 'react' // importando de uma biblioteca
import ReactClass from './components/ReactClass.jsx' // importando de um caminho relativo
import About from './components/About';

function App() {
  return (
   
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <About/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ReactClass/>
      </header>
    </div>
  );
}

export default App;
