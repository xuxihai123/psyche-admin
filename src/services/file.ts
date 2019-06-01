import api from './api';

export default {
  upload(payload: any): Promise<any> {
    return api.post('/upload/single', {payload, headers: {'Content-Type': 'multipart/form-data'}});
  },
};
