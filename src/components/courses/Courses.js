import React, { useContext } from 'react'
import DepartmentContext from '../../context/department/departmentContext'
//import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';

const Courses = () => {
  const departmentContext = useContext(DepartmentContext);
  const { courses } = departmentContext;

  return (
    <div>
      {courses.map(course => (
        <h1>{course.name}</h1>
      ))}
    </div>
  )
}

export default Courses
