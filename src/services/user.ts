import api from './api';

export default {
  login(payload: any): Promise<any> {
    return api.post('/login', {payload});
  },
  auth(payload: any): Promise<any> {
    return api.post('/authtoken', {payload});
  },
};
