import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Create from './pages/Create';
import Nav from './component/Nav';


function App() {
  return (
     <div className="App">
    <BrowserRouter>
    <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create" exact component={Create} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
