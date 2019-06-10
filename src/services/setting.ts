import api from './api';

export default {
  findBaseSetting(): Promise<any> {
    return api.get('/setting/base', {});
  },
  updateBaseSetting(payload: any) {
    return api.post('/setting/base', {payload});
  },
  findEmailSetting(): Promise<any> {
    return api.get('/setting/email', {});
  },
  updateEmailSetting(payload: any): Promise<any> {
    return api.post('/setting/email', {payload});
  },
};
