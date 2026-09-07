import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pcs-ai-helpdesk.onrender.com/api'
})

export const generateStudyPlan = (data) => {
  return api.post('/ai/study-plan', data)
}

export default api