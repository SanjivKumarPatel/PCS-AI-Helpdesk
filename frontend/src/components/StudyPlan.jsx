const StudyPlan = ({ studyPlan }) => {
  if (!studyPlan?.length) {
    return null
  }

  return (
    <section className='mt-8'>
      <div className='mb-5'>
        <h2 className='text-2xl font-bold text-white'>
          7-Day Study Plan
        </h2>

        <p className='mt-1 text-sm text-gray-400'>
          Follow this roadmap step by step to build your understanding.
        </p>
      </div>

      <div className='space-y-4'>
        {studyPlan.map((day) => (
          <div
            key={day.day}
            className='rounded-2xl border border-gray-400 bg-gray-900 p-5 transition hover:border-gray-50'
          >
            <div className='flex flex-col gap-4 sm:flex-row sm:items-start'>
              <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold'>
                {day.day}
              </div>

              <div className='flex-1'>
                <h3 className='text-lg font-semibold text-white'>
                  {day.title}
                </h3>

                <div className='mt-4'>
                  <h4 className='text-sm font-medium text-gray-300'>
                    Topics
                  </h4>

                  <ul className='mt-2 space-y-2'>
                    {day.topics?.map((topic, index) => (
                      <li
                        key={index}
                        className='text-sm leading-6 text-gray-400'
                      >
                        • {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='mt-4'>
                  <h4 className='text-sm font-medium text-gray-300'>
                    Activities
                  </h4>

                  <ul className='mt-2 space-y-2'>
                    {day.activities?.map((activity, index) => (
                      <li
                        key={index}
                        className='text-sm leading-6 text-gray-400'
                      >
                        ✓ {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StudyPlan