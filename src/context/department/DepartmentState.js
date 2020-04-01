import React, { useReducer } from 'react';
import axios from 'axios';
import DepartmentContext from './departmentContext';
import DepartmentReducer from './departmentReducer';
import {
  GET_DEPARTMENTS,
  GET_DEPARTMENT,
  GET_PROFESSORS,
  GET_COURSES
} from '../types'

const DepartmentState = props => {
  const initialState = {
    departments: [],
    department: {},
    professors: [],
    courses: []
  }

  const [state, dispatch] = useReducer(DepartmentReducer, initialState);

  // get all departments
  const getDepartments = async () => {
    const res = await axios.get('http://localhost:8080/departments');

    dispatch({
      type: GET_DEPARTMENTS,
      payload: res.data
    })

    console.log(res.data)
  }

  // get professors by deptId
  const getProfessorsByDeptId = async (id) => {
    const res = await axios.get(`localhost:8080/professors/byDepartments?departmentId=${id}`);

    dispatch({
      type: GET_PROFESSORS,
      payload: res.data
    })

    console.log(res.data)
  }

  // get courses by deptId
  const getCoursesByDeptId = async (id) => {
    const res = await axios.get(`localhost:8080/courses/byDepartments?departmentId=${id}`)

    dispatch({
      type: GET_COURSES,
      payload: res.data
    })

    console.log(res.data)
  }

  return (
    <DepartmentContext.Provider
      value={{
        departments: state.departments,
        getDepartments,
        getProfessorsByDeptId,
        getCoursesByDeptId
      }}
    >
      {props.children}
    </DepartmentContext.Provider>
  )
}

export default DepartmentState