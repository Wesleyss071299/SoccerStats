import axios from 'axios';

export const SECRET = process.env.API_KEY;

const api = axios.create({
  baseURL: 'https://api-football-standings.azharimm.site'
});

export default api;