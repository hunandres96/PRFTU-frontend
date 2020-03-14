import React, { useState, useEffect } from 'react'
import DepartmentService from '../services/DepartmentService'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const Department = () => {
  const useStyles = makeStyles(theme => ({
    button: {
      float: 'right'
    }
  }));

  const classes = useStyles();

  const [columns, setColumns] = useState({
    columns: [
      { title: 'Id', field: 'id' },
      { title: 'Department Name', field: 'department_name' }
    ]
  })

  const [departments, setDepartment] = useState([{
    id: '',
    department_name: ''
  }])

  const refreshDepartments = () => {
    DepartmentService.getAllDepartments()
      .then(res => {
        setDepartment(res.data)
      })
  }

  useEffect(() => {
    refreshDepartments()
    // eslint-disable-next-line
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>columns={columns.id}</TableCell>
            <TableCell>columns={columns.department_name}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {departments.map(department => (
            <TableRow>
              <TableCell>{department.id}</TableCell>
              <TableCell>
                {department.department_name}
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Department