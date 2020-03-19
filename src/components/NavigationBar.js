import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Navbar, Nav } from 'react-bootstrap'

export default class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Link to={""} className="nav-link">Home</Link>
          <Link to={"add"} className="nav-link">Add Student</Link>
          <Link to={"list"} className="nav-link">List of Students</Link>
        </Nav>
      </Navbar>
    )
  }
}
