import axios from 'axios';

const departments = 'departments'
const department_api_url = 'http://localhost:8080'
const department_api = `${department_api_url}/${departments}`

class DepartmentService {
  getAllDepartments() {
    return axios.get(department_api)
  }
}

export default new DepartmentService()