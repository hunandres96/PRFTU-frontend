import React, { useContext } from 'react'
import Courses from '../courses/Courses'
import Professors from '../professors/Professors'
import DepartmentContext from '../../context/department/departmentContext'

const Department = () => {
  const departmentContext = useContext(DepartmentContext);
  //const { courses } 

  return (
    <div>
      <Courses />
    </div>
  )
}

export default Department