import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@material-ui/core';

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar className="nav-container">
          <Button color="inherit">
            <Link to="/"></Link>
            Home</Button>
          <Button color="inherit" component={Link} to="/courses">Courses</Button>
          <Button color="inherit" component={Link} to="/departments">Departments</Button>
          <Button color="inherit" component={Link} to="/majors">Majors</Button>
          <Button color="inherit" component={Link} to="/professors">Faculty</Button>
          <Button color="inherit" component={Link} to="/students">Students</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
