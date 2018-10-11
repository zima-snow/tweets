import axios from 'axios';

export const getTweetsByUsername = (username, count) => {
  return axios.get(`http://localhost:5000/api/tweets?username=${username}&count=${count}`);
}
