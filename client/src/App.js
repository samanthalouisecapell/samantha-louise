import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import About from './Screens/About/About';
import Contact from './Screens/Contact/Contact';
import Media from './Screens/Music/Media';
import Tour from './Screens/Music/Performance';
import Welcome from './Screens/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Welcome}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/media" component={Media}/>
      <Route exact path="/tour" component={Tour}/>
      <Route exact path="/contact" component={Contact}/>
    </div>
  );
}

export default App;
