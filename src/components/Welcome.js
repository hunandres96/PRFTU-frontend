import React, { Component } from 'react'

import { Jumbotron } from 'react-bootstrap'

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="bg-dark text-white">
          <h1>Hello to UMSL website</h1>
          <p>
            Here you would be able to find all of UMSL courses, faculty, students, departments, and majors
            </p>
        </Jumbotron>
      </div>
    )
  }
}
