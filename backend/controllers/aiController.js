import { generateAIStudyPlan } from '../services/aiService.js'

/**
 * @desc Generate a personalized AI study plan
 * @route POST /api/ai/study-plan
 * @access Public
 */

export const generateStudyPlan = async (req, res) => {
  try {
    const { topic } = req.body

    if (!topic || !topic.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a topic'
      })
    }

    const result = await generateAIStudyPlan(topic.trim())

    return res.status(200).json({ success: true, message: 'Study plan generated successfully', data: result })
  } catch (error) {
    console.error('Study plan generation error:', error.message)

    return res.status(500).json({ success: false, message: 'Failed to generate study plan' })
  }
}