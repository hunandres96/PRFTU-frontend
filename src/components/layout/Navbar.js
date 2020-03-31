import React from 'react'
import { Link } from 'react-router-dom'

// material ui imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Button color="inherit">Home</Button>
          </Link>

          <Link to="/departments">
            <Button color="inherit">Departments</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
