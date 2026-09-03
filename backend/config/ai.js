import Groq from 'groq-sdk'

const getAIClient = () => {
  return new Groq({
    apiKey: process.env.GROQ_API_KEY
  })
}

export default getAIClient