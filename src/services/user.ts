import api from './api';

export default {
  login(payload: any): Promise<any> {
    return api.post('/login', {payload});
  },
  auth(payload: any): Promise<any> {
    return api.post('/authtoken', {payload});
  },
  session(): Promise<any> {
    return api.get('/session', {});
  },
  findAll(query: any): Promise<any> {
    return api.get('/users', {query});
  },
};
