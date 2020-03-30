import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NavigationBar from './components/layout/NavigationBar';

import { Container, Row, Col } from 'react-bootstrap'
import Welcome from './components/Welcome';
import Footer from './components/layout/Footer';
import Student from './components/students/Student';
import StudentList from './components/students/StudentList';
import FacultyList from './components/faculty/FacultyList';
import CourseList from './components/courses/CourseList';
import MajorList from './components/majors/MajorList';
import DepartmentList from './components/departments/DepartmentList';

const App = () => {
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
              <Route path="/students" exact component={StudentList}></Route>
              <Route path="/faculty" exact component={FacultyList}></Route>
              <Route path="/courses" exact component={CourseList}></Route>
              <Route path="/majors" exact component={MajorList}></Route>
              <Route path="/departments" exact component={DepartmentList}></Route>
            </Switch>
          </Col>
        </Row>
      </Container>
      <div>
        <Footer />
      </div>
    </Router>
  )
}

export default App