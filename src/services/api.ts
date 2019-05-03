import fetchApi from 'fetch-axios';
import {FaxiosResponse} from 'fetch-axios';
import errors from '@/common/errors';
fetchApi.config({
  baseUrl: '/api/v1',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  transformResponse: (res: FaxiosResponse<any>) => {
    if (res.status >= 200 && res.status < 300) {
      const data = res.data;
      if (data.status === 'ok') {
        // business ok
        return data.data;
      } else {
        throw new errors.BuessinessError(data.code, data.message);
      }
    } else {
      throw new errors.NetworkError(res.status, res.statusText);
    }
  },
});
export default fetchApi;
