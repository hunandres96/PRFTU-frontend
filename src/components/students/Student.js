import React, { Component } from 'react'
import StudentToast from './StudentToast'
import axios from 'axios'

import { Card, Form, Button, DropdownButton } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons'

export default class Student extends Component {
  constructor(props) {
    super(props)
    this.state = this.studentInitialState;
    this.state.show = false;
    this.changeStudentState = this.changeStudentState.bind(this);
    this.submitStudent = this.submitStudent.bind(this);

    console.log(this.studentInitialState)
  }

  studentInitialState = {
    name: '',
    email: '',
    id: ''
  }

  changeStudentState(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // changeStudentNumber(e) {
  //   this.setState
  // }

  submitStudent = (e) => {
    e.preventDefault()

    const newStudent = {
      name: this.state.name,
      email: this.state.email,
      major: {
        id: this.state.id
      }
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
                  value={this.state.name}
                  onChange={this.changeStudentState}
                  name="name"
                  type="text"
                  placeholder="Enter name" />
              </Form.Group>

              <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control required autoComplete="off"
                  value={this.state.email}
                  onChange={this.changeStudentState}
                  name="email"
                  type="email"
                  placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formGridMajor">
                <Form.Label>Major</Form.Label>
                <Form.Control autoComplete="off"
                  value={this.state.id}
                  onChange={this.changeStudentState}
                  name="id"
                  type="number"
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
