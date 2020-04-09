import React, { useContext } from 'react'
import DepartmentContext from '../../context/department/departmentContext'
import CourseItem from './CourseItem'

// material ui stuff
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Courses = () => {
  const classes = useStyles()

  const departmentContext = useContext(DepartmentContext);
  const { courses } = departmentContext;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell>Course description</TableCell>
            <TableCell>Professor Name</TableCell>
            <TableCell>Professor Email</TableCell>
          </TableRow>
        </TableHead>
        {courses.map(course => (
          <CourseItem course={course} />
        ))}
      </Table>
    </TableContainer>
  )
}

export default Courses

// return (
//   <TableContainer component={Paper}>
//     <Table className={classes.table} aria-label="caption table">
//       <TableHead>
//         <TableRow>
//           <TableCell>Course Name</TableCell>
//           <TableCell>Course description</TableCell>
//           <TableCell>Professor Name</TableCell>
//           <TableCell>Professor Email</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {courses.map(course => (
//           <TableRow key={course.id}>
//             <TableCell component="th" scope="row">{course.name}</TableCell>
//             <TableCell component="th" scope="row">{course.description}</TableCell>
//             <TableCell component="th" scope="row">{course.professor.name}</TableCell>
//             <TableCell component="th" scope="row">{course.professor.email}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </TableContainer>
// )
