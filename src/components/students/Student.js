import React, { Component } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faSave } from '@fortawesome/free-solid-svg-icons'

export default class Student extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      email: null,
      major: null
    }
    this.changeStudentState = this.changeStudentState.bind(this);
    this.submitStudent = this.submitStudent.bind(this);

  }

  changeStudentState(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitStudent(e) {
    alert(this.state.name)
    e.preventDefault()
  }

  render() {
    return (
      <Card className="border border-dark bg-dark text-white">
        <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Add new Student</Card.Header>
        <Form onSubmit={this.submitStudent} id="studentFormId">
          <Card.Body>
            <Form.Group controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control required
                value={this.state.name}
                onChange={this.changeStudentState}
                name="name"
                type="text"
                placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control required
                value={this.state.email}
                onChange={this.changeStudentState}
                name="email"
                type="email"
                placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formGridMajor">
              <Form.Label>Major</Form.Label>
              <Form.Control required
                value={this.state.major}
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
          </Card.Footer>
        </Form>
      </Card>
    )
  }
}
