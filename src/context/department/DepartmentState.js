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

const DepartmentState = (props) => {
  const initialState = {
    departments: [],
    department: {},
    professors: [],
    courses: []
  }

  const [state, dispatch] = useReducer(DepartmentReducer, initialState);

  // get all departments
  const getDepartments = async () => {
    const res = await axios.get('https://localhost:8080/departments');

    dispatch({
      type: GET_DEPARTMENTS,
      payload: res.data
    })
  }

  return (
    <DepartmentContext.Provider
      value={{
        getDepartments
      }}
    >
      {props.children}
    </DepartmentContext.Provider>
  )
}

export default DepartmentState
