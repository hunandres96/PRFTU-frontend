import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'
import Departments from './components/departments/Departments';
import DepartmentState from './context/department/DepartmentState';
import Department from './components/departments/Department';

const App = () => {

  return (
    <DepartmentState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/departments" component={Departments} />
          <Route exact path="/department" component={Department} />
        </Switch>
      </Router>
    </DepartmentState>
  )
}

export default App