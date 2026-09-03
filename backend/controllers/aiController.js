import { generateAIStudyPlan } from '../services/aiService.js'
import { searchYouTubeVideos } from '../services/youtubeService.js'

/**
 * @desc Generate a personalized AI study plan with YouTube resources
 * @route POST /api/ai/study-plan
 * @access Public
 */

export const generateStudyPlan = async (req, res) => {
  try {
    const { topic } = req.body

    if (!topic || !topic.trim()) {
      return res.status(400).json({ success: false, message: 'Please enter a topic' })
    }

    const cleanTopic = topic.trim()

    const result = await generateAIStudyPlan(cleanTopic)

    const videos = await searchYouTubeVideos(cleanTopic)

    return res.status(200).json({
      success: true,
      message: 'Study plan generated successfully',
      data: {
        topic: cleanTopic,
        studyPlan: result.studyPlan,
        videos,
        studyTips: result.studyTips
      }
    })
  } catch (error) {
    console.error('Study plan generation error:', error.message)

    return res.status(500).json({ success: false, message: 'Failed to generate study plan' })
  }
}