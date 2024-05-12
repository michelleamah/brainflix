import axios from 'axios';

const API_KEY = '951cd32f-2700-49ac-b1cc-c601cdd8c427';
const BASE_URL = 'https://unit-3-project-api-0a5620414506.herokuapp.com';

export function fetchVideos() {
  return axios.get(`${BASE_URL}/videos?api_key=${API_KEY}`);
}

export function fetchVideoDetails(id) {
  return axios.get(`${BASE_URL}/videos/${id}?api_key=${API_KEY}`);
}

export function postComment(videoId, comment) {
  return axios.post(`${BASE_URL}/videos/${videoId}/comments?api_key=${API_KEY}`, comment);
}