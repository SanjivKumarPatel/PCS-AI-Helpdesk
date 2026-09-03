import express from 'express'

import { generateStudyPlan } from '../controllers/aiController.js'

const aiRouter = express.Router()

/**
 * @desc Generate a personalized AI study plan
 * @route POST /api/ai/study-plan
 * @access Public
 */

aiRouter.post('/study-plan', generateStudyPlan)

export default aiRouter