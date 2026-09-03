/**
 * @desc Generate a personalized AI study plan
 * @route POST /api/ai/study-plan
 * @access Public
 */

export const generateStudyPlan = async (req, res) => {
  try {
    const { topic } = req.body

    if (!topic || !topic.trim()) {
      return res.status(400).json({ success: false, message: 'Please enter a topic' })
    }

    return res.status(200).json({
      success: true,
      message: 'Study plan request received successfully',
      data: {
        topic: topic.trim()
      }
    })
  } catch (error) {
    console.error('Study plan generation error:', error.message)

    return res.status(500).json({ success: false, message: 'Internal server error' })
  }
}