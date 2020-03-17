import React, { Component } from 'react'
import { Card, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

export default class StudentList extends Component {
  render() {
    return (
      <Card className="border border-dark bg-dark text-white">
        <Card.Header><FontAwesomeIcon icon={faList} /> Students:</Card.Header>
        <Card.Body>
          <Table bordered hover striped variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Major</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Andres Hun</td>
                <td>andreshun@gmail.com</td>
                <td>Marketing</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Miguel Hun</td>
                <td>miguelhun@gmail.com</td>
                <td>Info System</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jorge Villegas</td>
                <td>jorgevillegas@gmail.com</td>
                <td>Graphic Design</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    )
  }
}
