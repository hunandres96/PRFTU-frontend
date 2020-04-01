import {
  GET_DEPARTMENTS,
  GET_PROFESSORS,
  GET_COURSES
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_DEPARTMENTS:
      return {
        ...state,
        departments: action.payload
      };
    case GET_PROFESSORS:
      return {
        ...state,
        professors: action.payload
      };
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload
      }
    default:
      return state;
  }
}