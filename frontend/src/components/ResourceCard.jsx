import { ExternalLink, Play } from 'lucide-react'

const ResourceCard = ({ video }) => {
  return (
    <div className='overflow-hidden rounded-2xl border border-gray-400 bg-gray-900 transition hover:border-gray-50 hover:-translate-y-1'>
      <img
        src={video.thumbnail}
        alt={video.title}
        className='aspect-video w-full object-cover'
      />

      <div className='p-5'>
        <h3 className='line-clamp-2 text-base font-semibold text-white'>
          {video.title}
        </h3>

        <p className='mt-2 text-sm text-gray-400'>
          {video.channel}
        </p>

        <p className='mt-3 line-clamp-2 text-sm leading-6 text-gray-500'>
          {video.description}
        </p>

        <a
          href={video.url}
          target='_blank'
          rel='noreferrer'
          className='mt-4 inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700'
        >
          <Play size={16} />
          Watch on YouTube
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  )
}

export default ResourceCard