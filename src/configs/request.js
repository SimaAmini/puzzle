import { Axios } from './axios';

export const Request = {
  get: (...args) => Axios.get(...args),
  post: (...args) => Axios.post(...args),
  put: (...args) => Axios.put(...args),
  delete: (...args) => Axios.delete(...args),
};
