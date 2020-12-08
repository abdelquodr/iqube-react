import './App.css';
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {

  return (
    < Router >
      <Switch>
        <Route exact path='/'>
          <Page1 />
        </Route>

        <Route exact path='/second-page'>
          <Page2 />
        </Route>

        <Route exact path='/third-page'>
          <Page3 />
        </Route>

        <Route exact path='/fourth-page'>
          <Page4 />
        </Route>
      </Switch>
    </Router >


  );
}

export default App;
