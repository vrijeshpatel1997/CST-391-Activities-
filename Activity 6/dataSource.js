import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000' // Update this baseURL if your server is running on a different domain or port
});

export default instance;
