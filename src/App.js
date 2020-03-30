import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'

const App = () => {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App