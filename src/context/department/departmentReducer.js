import {
  GET_DEPARTMENTS,
  GET_DEPARTMENT,
  GET_PROFESSORS,
  GET_COURSES
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_DEPARTMENTS:
      return {
        ...state,
        departments: action.payload
      }
    default:
      return state;
  }
}