import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import aiRouter from './routes/aiRoutes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/ai', aiRouter)

app.get('/', (req, res) => {
  return res.status(200).json({ success: true, message: 'PCS AI Helpdesk API is running' })
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})