import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home'
import Course from './components/Course'
import Department from './components/Department'
import Major from './components/Major'
import Professor from './components/Professor'
import Student from './components/Student'
import Navbar from './Navbar';

const App = () => {

  return (
    <div className="App">
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/courses" component={Course} />
            <Route exact path="/departments" component={Department} />
            <Route exact path="/majors" component={Major} />
            <Route exact path="/professors" component={Professor} />
            <Route exact path="/students" component={Student} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
