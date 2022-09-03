// @ts-nocheck
import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const searchOptions = {
  cors: 'no-cors',
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const data = await axios.get(`${BASE_URL}/${url}`, searchOptions);

    return data;
  } catch {
    console.log('Fetching data from API fails');
  }
};

const channelOptions = {
  method: 'GET',
  cors: 'no-cors',
  url: 'https://youtube138.p.rapidapi.com/channel/details/',
  params: { hl: 'en', gl: 'US' },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};

export const fetchChannelDetailsFromAPI = (channelId) => {
  try {
    channelOptions.params.id = channelId;
    console.log({ channelOptions });
    let data;
    return axios.request(channelOptions).then((response) => response.data);

    // return data;
  } catch {
    console.log('Fetching data from API fails');
  }
};

const channelVideosOptions = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/channel/videos/',
  params: { hl: 'en', gl: 'US' },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};

export const fetchChannelVideosFromAPI = (channelId) => {
  try {
    channelVideosOptions.params.id = channelId;
    console.log({ channelVideosOptions });
    let data;
    return axios.request(channelVideosOptions).then((response) => console.log(response.data.contents));

    // return data;
  } catch {
    console.log('Fetching data from API fails');
  }
};

const videoDetailOptions = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/video/details/',
  params: { part: 'snippet,stats' },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};

export const fetchVideoDetailsFromAPI = (channelId) => {
  try {
    videoDetailOptions.params.id = channelId;
    let data;
    return axios.request(videoDetailOptions).then((response) => response?.data);

    // return data;
  } catch {
    console.log('Fetching data from API fails');
  }
};
