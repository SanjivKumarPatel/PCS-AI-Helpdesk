import axios from 'axios'

/**
 * @desc Search YouTube for relevant learning videos
 */

export const searchYouTubeVideos = async (query) => {
  if (!query || !query.trim()) {
    return []
  }

  const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      q: query.trim(),
      type: 'video',
      maxResults: 5,
      order: 'relevance',
      relevanceLanguage: 'en',
      regionCode: 'IN',
      key: process.env.YOUTUBE_API_KEY
    }
  })

  return response.data.items.map((video) => ({
    title: video.snippet.title,
    channel: video.snippet.channelTitle,
    description: video.snippet.description,
    thumbnail: video.snippet.thumbnails?.high?.url || video.snippet.thumbnails?.default?.url,
    url: `https://www.youtube.com/watch?v=${video.id.videoId}`
  }))
}