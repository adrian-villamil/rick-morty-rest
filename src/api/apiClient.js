import axios from "axios";

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
});

api.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response.status === 404) {
    window.location.href = '/not-found';
  }
  return Promise.reject(error);
});

export { api };