import React, { Component } from 'react'
import StudentToast from './StudentToast'
import axios from 'axios'

import { Card, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons'

export default class Student extends Component {
  constructor(props) {
    super(props)
    this.state = this.studentInitialState;
    this.state.show = false;
    this.changeStudentState = this.changeStudentState.bind(this);
    this.submitStudent = this.submitStudent.bind(this);
  }

  studentInitialState = {
    student_name: '',
    student_email: ''
  }

  changeStudentState(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitStudent = (e) => {
    e.preventDefault()

    const newStudent = {
      student_name: this.state.student_name,
      student_email: this.state.student_email
    }

    console.log(newStudent)

    const students_url = 'http://localhost:8080/students';

    axios.post(students_url, newStudent)
      .then(res => {
        if (res.data != null) {
          this.setState({ "show": true })
          setTimeout(() => this.setState({ "show": false }), 3000)
          console.log(res.data)
        } else {
          this.setState({ "show": false })
        }
      })
    this.setState(this.studentInitialState)
  }

  resetStudent = () => {
    this.setState(() => this.studentInitialState)
  }

  render() {
    const { student_name, student_email, major } = this.state;

    return (
      <div>
        <div style={{ "display": this.state.show ? "block" : "none" }}>
          <StudentToast
            children={{ show: this.state.show, message: "Student Saved Successfully" }}>
          </StudentToast>
        </div>
        <Card className="border border-dark bg-dark text-white">
          <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Add new Student</Card.Header>
          <Form onSubmit={this.submitStudent} onReset={this.resetStudent} id="studentFormId">
            <Card.Body>
              <Form.Group controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control required autoComplete="off"
                  value={student_name}
                  onChange={this.changeStudentState}
                  name="student_name"
                  type="text"
                  placeholder="Enter name" />
              </Form.Group>

              <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control required autoComplete="off"
                  value={student_email}
                  onChange={this.changeStudentState}
                  name="student_email"
                  type="email"
                  placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formGridMajor">
                <Form.Label>Major</Form.Label>
                <Form.Control autoComplete="off"
                  value={major}
                  onChange={this.changeStudentState}
                  name="major"
                  type="text"
                  placeholder="Enter major" />
              </Form.Group>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" type="submit">
                <FontAwesomeIcon icon={faSave} /> Submit
            </Button>
              <Button variant="info" type="reset">
                <FontAwesomeIcon icon={faUndo} /> Reset
            </Button>
            </Card.Footer>
          </Form>
        </Card>
      </div>
    )
  }
}
