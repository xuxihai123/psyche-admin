import api from './api';

export default {
  findAll(query: any): Promise<any> {
    return api.get('/posts', {query});
  },
  get(id: string) {
    return api.get('/posts/' + id, {});
  },
  create(payload: any): Promise<any> {
    return api.post('/posts', {payload});
  },
  delete(id: string): Promise<any> {
    return api.delete('/posts/' + id, {});
  },
  update(payload: any): Promise<any> {
    return api.put('/posts/' + payload.id, {payload});
  },
};
