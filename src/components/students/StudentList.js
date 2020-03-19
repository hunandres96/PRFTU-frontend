import React, { Component } from 'react'
import axios from 'axios'
import { Card, Table, Button, ButtonGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import StudentToast from './StudentToast'

export default class StudentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    this.getAllStudents()
  }

  getAllStudents() {
    const students_url = 'http://localhost:8080/students';

    axios.get(students_url)
      .then(response => response.data)
      .then(res => {
        this.setState({ students: res })
        console.log(res)
      })
  }

  deleteStudent = (studentId) => {
    const students_url = 'http://localhost:8080/students/';

    axios.delete(students_url + studentId)
      .then(res => {
        if (res.data != null) {
          this.setState({ "show": true })
          setTimeout(() => this.setState({ "show": false }), 3000)

          this.setState({
            students: this.state.students.filter(student => student.id !== studentId)
          })
        } else {
          this.setState({ "show": false })
        }
      })
  }

  render() {
    return (
      <div>
        <div style={{ "display": this.state.show ? "block" : "none" }}>
          <StudentToast
            children={{ show: this.state.show, message: "Student Deleted Successfully" }}>
          </StudentToast>
        </div>
        <Card className="border border-dark bg-dark text-white">
          <Card.Header><FontAwesomeIcon icon={faList} /> Students:</Card.Header>
          <Card.Body>
            <Table bordered hover striped variant="dark">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Major</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>

              <tbody>
                {this.state.students.map(student => (
                  <tr key={student.id}>
                    <td>{student.student_name}</td>
                    <td>{student.student_email}</td>
                    <td>{student.major.major_name}</td>
                    <td>
                      <ButtonGroup>
                        <Button
                          size="sm"
                          variant="outline-primary">
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Button
                          onClick={this.deleteStudent.bind(this, student.id)}
                          size="sm"
                          variant="outline-danger">
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>

    )
  }
}