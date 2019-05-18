import api from './api';
const config = {
  transformResponse(resp: any) {
    return resp.data;
  },
};

function cleanStartEnd(str: string) {
  return str.replace(/^->\|/, '').replace(/\|<-$/, '');
}

function parseFileline(fileline: string) {
  // bin/	2019-5-1 10:35:33	0	-
  const parts = fileline.split('\t');
  return {
    filename: parts[0],
    mtime: parts[1],
    size: parts[2],
    attr: parts[3],
    isDirectory: parts[0].endsWith('/'),
  };
}

export default {
  readDir(payload: any): Promise<any> {
    payload.action = 'readdict';
    payload.z1 = payload.path;
    payload.z = '1';
    return api.post('/caidao', {payload, config}).then((result: any) => {
      result = cleanStartEnd(result);
      return result.split('\n').map(parseFileline);
    });
  },
  readCurrentDir(): Promise<any> {
    const payload = {action: 'index', z: '1'};
    return api.post('/caidao', {payload, config}).then((result: any) => {
      return cleanStartEnd(result).trim();
    });
  },
  explorer(payload: any): Promise<any> {
    return api.post('/explorer', {payload}).then((result: any) => {
      return result;
    });
  },
};
