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

  return (
    <DepartmentContext.Provider
      value={{
        departments: state.departments,
        getDepartments
      }}
    >
      {props.children}
    </DepartmentContext.Provider>
  )
}

export default DepartmentState





// const getDepartments = () => {
//   return axios.get('http://localhost:8080/departments')
//     .then(res => {
//       let image = btoa(
//         new Uint8Array(res.data)
//           .reduce((data, byte) => data + String.fromCharCode(byte), '')
//       );
//       return `data:${res.headers['content-type'].toLowerCase()};base64,${image}`;
//     })

//   dispatch({
//     type: GET_DEPARTMENTS,
//     payload: res.data
//   })

//   console.log(res.data)
// }