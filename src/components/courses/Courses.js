import React, { useContext } from 'react'
import DepartmentContext from '../../context/department/departmentContext'
//import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const Courses = () => {
  const departmentContext = useContext(DepartmentContext);
  const { courses } = departmentContext;

  return (
    <div>
      <GridList>
        {courses.map(course => (
          <GridListTile key={course.id}>
            <GridListTileBar
              title={course.name}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default Courses
