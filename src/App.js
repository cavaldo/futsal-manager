import React from 'react';
import About from './pages/About';
import HomePage from './pages/HomePage';
import Stats from './pages/Stats';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/about" component={About}/>
          <Route path="/stats" component={Stats}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
