import api from './api';

export default {
  findAll(query: any): Promise<any> {
    return api.get('/posts', {query});
  },
};
