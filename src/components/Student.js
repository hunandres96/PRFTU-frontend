import React, { useState, useEffect } from 'react'
import StudentService from '../services/StudentService'
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
import TablePagination from '@material-ui/core/TablePagination';

import axios from 'axios';

const Student = () => {
  const useStyles = makeStyles(theme => ({
    button: {
      float: 'right'
    }
  }));

  const columns = [
    { id: 'student_name', label: 'Student Name', minWidth: 170 },
    { id: 'student_email', label: 'Student Email', mindWidth: 100 }
  ]

  const [students, setStudent] = useState([
    {
      id: '',
      student_name: '',
      student_email: ''
    }
  ])

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [studentsPerPage, setStudentsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeStudentsPerPage = event => {
    setStudentsPerPage(+event.target.value);
    setStudent(0);
  };

  const refreshStudents = () => {
    StudentService.getAllStudents()
      .then(res => {
        setStudent(res.data)
        console.log(res.data)
      })
  }

  const deleteStudent = (students) => {
    StudentService.deleteStudent({
      params: { id: students.id }
    }).then(res => {
      //setStudent({ message: 'Student deleted successfully' })
      setStudent()
      refreshStudents()
      console.log(res.data.id)
    })
  }

  useEffect(() => {
    refreshStudents()
    // eslint-disable-next-line
  }, [])

  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {students.slice(page * studentsPerPage, page * studentsPerPage + studentsPerPage).map(student => {
              return (
                <TableRow key={student.id}>
                  {columns.map(column => {
                    const value = student[column.id]
                    return (
                      <TableCell key={column.id}>
                        {value}
                      </TableCell>
                    )
                  })}
                  <Button
                    onClick={deleteStudent}
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                        </Button>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={students.length}
        rowsPerPage={studentsPerPage}
        page={students}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeStudentsPerPage} />
    </Paper>
  )
}

export default Student

