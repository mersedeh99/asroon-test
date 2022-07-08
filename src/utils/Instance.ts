import axios from 'axios';
const Instance = axios.create({
    baseURL: 'https://62bfe35ec134cf51cec58701.mockapi.io/api/crud',
  });
export default Instance;