import axios from 'axios';
const BASE_URL = 'https://3.74.27.247:8080';

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});
