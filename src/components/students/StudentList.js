import React, { Component } from 'react'
import axios from 'axios'
import { Card, Table, Button, ButtonGroup, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faEdit, faTrash, faFastBackward, faStepBackward, faStepForward, faFastForward } from '@fortawesome/free-solid-svg-icons'
import StudentToast from './StudentToast'

export default class StudentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [],
      currentPage: 1,
      studentsPerPage: 5
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

  changePage = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value)
    })
  }

  firtPage = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: 1
      })
    }
  }

  prevPage = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: this.state.currentPage - 1
      })
    }
  }

  nextPage = () => {
    if (this.state.currentPage < Math.ceil(this.state.students.length / this.state.studentsPerPage)) {
      this.setState({
        currentPage: this.state.currentPage + 1
      })
    }
  }

  lastPage = () => {
    if (this.state.currentPage < Math.ceil(this.state.students.length / this.state.studentsPerPage)) {
      this.setState({
        currentPage: Math.ceil(this.state.students.length / this.state.studentsPerPage)
      })
    }
  }

  render() {
    const { students, currentPage, studentsPerPage } = this.state;
    const lastIndex = currentPage * studentsPerPage;
    const firstIndex = lastIndex - studentsPerPage;
    const currentStudents = students.slice(firstIndex, lastIndex);
    const totalPages = students.length / studentsPerPage;

    const pageNumCss = {
      width: "45px",
      border: "1px solid #17A2B8",
      color: "#17A2B8",
      textAlign: "center",
      fontWeigth: "bold"
    }

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
                {currentStudents.map(student => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.major.name}</td>
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

          <Card.Footer>
            <div style={{ "float": "left" }}>
              Showing Page {currentPage} of {totalPages}
            </div>
            <div style={{ "float": "right" }}>
              <InputGroup size="sm">

                <InputGroup.Prepend>
                  <Button
                    type="button"
                    variant="outline-info"
                    disabled={currentPage === 1 ? true : false}
                    onClick={this.firtPage}>
                    <FontAwesomeIcon icon={faFastBackward} />First
                  </Button>
                  <Button
                    type="button"
                    variant="outline-info"
                    disabled={currentPage === 1 ? true : false}
                    onClick={this.prevPage}>
                    <FontAwesomeIcon icon={faStepBackward} />Prev
                  </Button>
                </InputGroup.Prepend>

                <FormControl
                  style={pageNumCss}
                  className={"bg-dark"}
                  name="currentPage"
                  value={currentPage}
                  onChange={this.changePage} />

                <InputGroup.Append>
                  <Button
                    type="button"
                    variant="outline-info"
                    disabled={currentPage === totalPages ? true : false}
                    onClick={this.nextPage}>
                    <FontAwesomeIcon icon={faStepForward} />Next
                  </Button>
                  <Button
                    type="button"
                    variant="outline-info"
                    disabled={currentPage === totalPages ? true : false}
                    onClick={this.lastPage}>
                    <FontAwesomeIcon icon={faFastForward} />Last
                  </Button>
                </InputGroup.Append>

              </InputGroup>
            </div>
          </Card.Footer>

        </Card>
      </div>

    )
  }
}