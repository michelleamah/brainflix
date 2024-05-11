import axios from 'axios';

const brainflixURL = 'https://unit-3-project-api-0a5620414506.herokuapp.com';
const apiKey = '26195c7a-45d3-4bd5-a8bf-bfddb79f0396';

export const fetchVideos = async () => {
  try {
    const response = await axios.get(`${brainflixURL}/videos?api_key=${apiKey}`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching videos:', error.message);
    return null;
  }
};

export const fetchVideoData = async (videoId) => {
  try {
    const response = await axios.get(`${brainflixURL}/videos/${videoId}?api_key=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching video details:', error.message);
    return null;
  }
};