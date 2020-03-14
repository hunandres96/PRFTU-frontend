import axios from 'axios';

const students = 'students'
const url = 'http://localhost:8080'
const student_url = `${url}/${students}`

class StudentService {

  getAllStudents() {
    return axios.get(student_url)
  }

  deleteStudent(id) {
    return axios.delete(`${student_url}/${id}`)
  }
}

export default new StudentService()