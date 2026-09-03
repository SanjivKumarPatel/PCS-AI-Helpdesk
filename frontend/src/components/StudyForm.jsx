import { Sparkles } from 'lucide-react'

const StudyForm = ({ topic, setTopic, onSubmit, loading }) => {
  return (
    <form
      onSubmit={onSubmit}
      className='rounded-2xl border border-white bg-gray-900 p-6 shadow-2xl sm:p-8'
    >
      <label
        htmlFor='topic'
        className='mb-2 block text-xl font-medium text-white'
      >
        Enter Topic
      </label>

      <input
        id='topic'
        type='text'
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder='e.g. JavaScript Callbacks'
        className='w-full rounded-xl border border-gray-700  bg-gray-950 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
      />

      <button
        type='submit'
        disabled={loading}
        className='mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60'
      >
        <Sparkles size={18} />
        {loading ? 'Generating Study Plan...' : 'Generate Study Plan'}
      </button>
    </form>
  )
}

export default StudyForm