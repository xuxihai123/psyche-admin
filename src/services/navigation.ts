import api from './api';

export default {
  findAll(query: any): Promise<any> {
    return api.get('/navigations', {query});
  },
  create(payload: any): Promise<any> {
    return api.post('/navigations', {payload});
  },
  delete(id: string): Promise<any> {
    return api.delete('/navigations/' + id, {});
  },
  update(payload: any): Promise<any> {
    return api.put('/navigations/' + payload.id, {payload});
  },
  moveLeft(payload: any): Promise<any> {
    return api.post('/navigations/prev', {payload});
  },
  moveRight(payload: any): Promise<any> {
    return api.post('/navigations/next', {payload});
  },
};
