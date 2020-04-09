import React from 'react'

// material ui stuff
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const CourseItem = ({ course }) => {
  return (
    <TableBody>
      <TableRow key={course.id}>
        <TableCell component="th" scope="row">{course.name}</TableCell>
        <TableCell component="th" scope="row">{course.description}</TableCell>
        <TableCell component="th" scope="row">{course.professor.name}</TableCell>
        <TableCell component="th" scope="row">{course.professor.email}</TableCell>
      </TableRow>
    </TableBody>
  )
}

export default CourseItem
