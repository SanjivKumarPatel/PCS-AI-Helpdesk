import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
})

export const generateStudyPlan = (data) => {
  return api.post('/ai/study-plan', data)
}

export default api