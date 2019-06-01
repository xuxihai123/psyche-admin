import api from './api';

export default {
  findAll(query: any): Promise<any> {
    return api.get('/tags', {query});
  },
  create(payload: any): Promise<any> {
    return api.post('/tags', {payload});
  },
  delete(id: string): Promise<any> {
    return api.delete('/tags/' + id, {});
  },
  update(payload: any): Promise<any> {
    return api.put('/tags/' + payload.id, {payload});
  },
  search(keyword: string) {
    const query = {keyword};
    return api.get('/tags/search', {query});
  },
};
