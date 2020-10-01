import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import About from './Screens/About/About';

function App() {
  return (
    <div className="App">
      <Route exact path="/about" component={About}/>
    </div>
  );
}

export default App;
