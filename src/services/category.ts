import api from './api';

export default {
  findAll(query: any): Promise<any> {
    return api.get('/categorys', {query});
  },
  create(payload: any): Promise<any> {
    return api.post('/categorys', {payload});
  },
  delete(id: string): Promise<any> {
    return api.delete('/categorys/' + id, {});
  },
  update(payload: any): Promise<any> {
    return api.put('/categorys/' + payload.id, {payload});
  },
};
