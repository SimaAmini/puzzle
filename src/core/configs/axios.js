import axios from 'axios';

import { authStore } from '@core/hooks/auth-store';

const defaults = {
  headers: () => ({
    'Content-Type': 'application/json',
    Authorization: authStore.getState().getToken()
      ? `Bearer ${authStore.getState().getToken()}`
      : undefined,
  }),
  error: {
    code: 'INTERNAL_ERROR',
    message:
      'Something went wrong. Please check your internet connection or contact our support',
    status: 503,
    data: {},
  },
};

const api = (method, url, data) => {
  return new Promise((resolve, reject) => {
    axios({
      method,
      url: `${'http://192.168.1.100:1337/api'}${url}`,
      data,
      headers: defaults.headers(),
    }).then(
      function (response) {
        return resolve(response.data);
      },
      (error) => {
        // console.log('error:::::::::::', error);

        if (error.response) {
          if (error.response.data.error.code === 'INVALID_TOKEN') {
            authStore.getState().removeToken();
          } else {
            reject(error.response.data.error);
          }
        } else {
          const theError = defaults.error;
          if (error && error.getMessage) {
            theError.getMessage = error.getMessage;
          }
          reject(theError);

          //reject(defaults.error);
        }
      },
    );
  });
};

export const Axios = {
  get: (...args) => api('get', ...args),
  post: (...args) => api('post', ...args),
  put: (...args) => api('put', ...args),
  patch: (...args) => api('patch', ...args),
  delete: (...args) => api('delete', ...args),
};
