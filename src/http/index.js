import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const privetApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const token = {
  set(value) {
    privetApi.defaults.headers.Authorization = `Bearer ${value}`;
  },
  unSet() {
    privetApi.defaults.headers.Authorization = null;
  },
};
