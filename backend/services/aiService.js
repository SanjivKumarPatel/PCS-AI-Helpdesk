import getAIClient from '../config/ai.js'

/**
 * @desc Generate a study plan using AI
 */

export const generateAIStudyPlan = async (topic) => {
  const groq = getAIClient()

  const prompt = `
    Create a practical and structured 7-day learning plan for the following topic:

    Topic: ${topic}

    The study plan should:
    - Start with the fundamentals
    - Progress logically from basic to advanced concepts
    - Focus on the most important concepts
    - Include practical learning activities
    - Be useful for self-study
    - Avoid unnecessary or unrelated topics

    Also provide a few useful study tips.

    Do not provide website URLs or YouTube URLs.

    Return only valid JSON using the following structure:
    {
      "studyPlan": [
        {
          "day": 1,
          "title": "Topic title",
          "topics": [
            "Concept 1",
            "Concept 2"
          ],
          "activities": [
            "Activity 1",
            "Activity 2"
          ]
        }
      ],
      "studyTips": [
        "Tip 1",
        "Tip 2",
        "Tip 3"
      ]
    }
  `

  const response = await groq.chat.completions.create({
    model: 'openai/gpt-oss-20b',
    messages: [
      {
        role: 'system',
        content: 'You are an expert AI study planner. Return only valid JSON.'
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    response_format: {
      type: 'json_schema',
      json_schema: {
        name: 'study_plan',
        strict: true,
        schema: {
          type: 'object',
          properties: {
            studyPlan: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  day: {
                    type: 'integer'
                  },
                  title: {
                    type: 'string'
                  },
                  topics: {
                    type: 'array',
                    items: {
                      type: 'string'
                    }
                  },
                  activities: {
                    type: 'array',
                    items: {
                      type: 'string'
                    }
                  }
                },
                required: ['day', 'title', 'topics', 'activities'],
                additionalProperties: false
              }
            },
            studyTips: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          },
          required: ['studyPlan', 'studyTips'],
          additionalProperties: false
        }
      }
    }
  })

  return JSON.parse(response.choices[0]?.message?.content || '{}')
}