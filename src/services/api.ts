// import fetchApi, {FaxiosRequest} from 'fetch-axios';
// import {FaxiosResponse} from 'fetch-axios';
import errors from '@/common/errors';
import errorCodes from '@/config/errorCodes';
import axios, {AxiosResponse} from 'axios';

const instance = axios.create({
  baseURL: '/api/v1',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
// Add a response interceptor
instance.interceptors.response.use(
  (response: any) => {
    if (response.status >= 200 && response.status < 300) {
      const data = response.data;
      const contentType = response.headers['content-type'];
      if (!/application\/json/.test(contentType)) {
        return;
      }
      if (data && data.code !== '0000') {
        console.log(errorCodes.business[data.code] || data.message);
        throw new errors.BuessinessError(data.code, data.message);
      }
    } else {
      console.log(errorCodes.network[response.status] || response.statusText);
      throw new errors.NetworkError(response.status, response.statusText);
    }
    // Do something with response data
    return response;
  },
  (error: Error) => {
    // Do something with response error
    return Promise.reject(error);
  },
);


const api = ['get', 'post', 'put', 'delete'].reduce((prev: any, key: string) => {
  prev[key] = (url: string, options: any) => {
    options.method = key;
    options.url = url;
    if (key === 'post') {
      options.params = options.payload;
    } else {
      options.params = options.query;
    }
    const start = Date.now();
    return (instance as any)(options).then((resp: AxiosResponse) => {
      console.log(`[axios]: ${resp.config.url} ${Date.now() - start}ms`);
      const respData = resp.data;
      if (respData && respData.code === '0000') {
        return respData.data || resp.data;
      } else {
        return resp.data;
      }
    });
  };
  return prev;
}, {});
export default api;
