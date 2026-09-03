import { useState } from 'react'
import { Sparkles } from 'lucide-react'

import StudyForm from '../components/StudyForm.jsx'
import { generateStudyPlan } from '../services/api.js'
import StudyPlan from '../components/StudyPlan.jsx'
import ResourceCard from '../components/ResourceCard.jsx'

const AiHelpdesk = () => {
  const [topic, setTopic] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!topic.trim()) {
      setError('Please enter a topic')
      return
    }

    setError('')
    setLoading(true)
    setResult(null)

    try {
      const response = await generateStudyPlan({
        topic: topic.trim(),
      })

      setResult(response.data.data)
    } catch (error) {
      console.error('Study plan error:', error.message)

      setError(
        error.response?.data?.message || 'Failed to generate study plan',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className='min-h-screen bg-gray-950 px-4 py-10 text-white sm:px-6'>
      <div className='mx-auto max-w-4xl'>
        <div className='mb-10 text-center'>
          <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-4 py-2 text-sm text-gray-300'>
            <Sparkles size={16} />
            AI Powered Learning
          </div>

          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
            PCS AI Helpdesk
          </h1>

          <p className='mx-auto mt-4 max-w-2xl text-gray-400'>
            Enter a topic and get a practical 7-day learning plan with useful
            YouTube resources.
          </p>
        </div>

        <StudyForm
          topic={topic}
          setTopic={setTopic}
          onSubmit={handleSubmit}
          loading={loading}
        />

        {error && (
          <p className='mt-4 text-center text-sm text-red-400'>{error}</p>
        )}

        {result && (
          <div className='mt-10'>
            <StudyPlan studyPlan={result.studyPlan} />

            {result.videos?.length > 0 && (
              <section className='mt-10'>
                <div className='mb-5'>
                  <h2 className='text-2xl font-bold text-white'>
                    Recommended YouTube Videos
                  </h2>

                  <p className='mt-1 text-sm text-gray-400'>
                    Explore videos selected for your learning topic.
                  </p>
                </div>

                <div className='grid gap-5 md:grid-cols-2'>
                  {result.videos.map((video, index) => (
                    <ResourceCard key={video.url || index} video={video} />
                  ))}
                </div>
              </section>
            )}

            {result.studyTips?.length > 0 && (
              <section className='mt-10 rounded-2xl border border-gray-800 bg-gray-900 p-6'>
                <h2 className='text-xl font-bold text-white'>AI Study Tips</h2>

                <ul className='mt-4 space-y-3'>
                  {result.studyTips.map((tip, index) => (
                    <li key={index} className='text-sm leading-6 text-gray-400'>
                      💡 {tip}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        )}
      </div>
    </main>
  )
}

export default AiHelpdesk
