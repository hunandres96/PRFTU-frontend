import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NavigationBar from './components/NavigationBar';

import { Container, Row, Col } from 'react-bootstrap'
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Student from './components/students/Student';
import StudentList from './components/students/StudentList';

function App() {
  const margin = {
    marginTop: "20px"
  }

  return (
    <Router>
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} style={margin}>
            <Switch>
              <Route path="/" exact component={Welcome}></Route>
              <Route path="/add" exact component={Student}></Route>
              <Route path="/list" exact component={StudentList}></Route>
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
