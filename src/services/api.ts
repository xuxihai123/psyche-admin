import fetchApi, {FaxiosRequest} from 'fetch-axios';
import {FaxiosResponse} from 'fetch-axios';
import errors from '@/common/errors';
import errorCodes from '@/config/errorCodes';

fetchApi.config({
  baseUrl: '/api/v1',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  transformResponse: (res: FaxiosResponse<any>) => {
    const respData = res.data;
    if (respData && respData.status === 'ok') {
      return respData.data || res.data;
    } else {
      return res.data;
    }
  },
  beforeRequest: (req: any) => {
    req.start = Date.now();
  },
  afterRequest: (req: any) => {
    const time = Date.now() - req.start;
    console.log(`[fetch-axios]: ${req.url} ${time}ms`);
  },
});
fetchApi.addResponseInterceptor((res: FaxiosResponse<any>) => {
  if (res.status >= 200 && res.status < 300) {
    const data = res.data;
    const contentType = res.headers['content-type'];
    if (!/application\/json/.test(contentType)) {
      return;
    }
    if (data && data.status !== 'ok') {
      console.log(errorCodes.business[data.code] || data.message);
      throw new errors.BuessinessError(data.code, data.message);
    }
  } else {
    console.log(errorCodes.network[res.status] || res.statusText);
    throw new errors.NetworkError(res.status, res.statusText);
  }
});
export default fetchApi;
