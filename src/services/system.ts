import api from './api';
const config = {
  transformResponse(resp: any) {
    return resp.data;
  },
};

function parseData(data: string, parent: string) {
  let result = data.replace(/^->\|/, '').replace(/\|<-$/, '');
  return result.split('\n').map(transformLine);

  function transformLine(filestr: string) {
    // bin/	2019-5-1 10:35:33	0	-
    const parts = filestr.split('\t');
    return {
      filename: parts[0],
      mtime: parts[1],
      size: parts[2],
      isDirectory: parts[0].endsWith('/'),
      parent: parent,
    };
  }
}

export default {
  readDir(query: any): Promise<any> {
    query.action = 'readdict';
    query.z1 = query.path;
    return api.get('/caidao', {query, config}).then((result: any) => {
      return parseData(result, query.path);
    });
  },
};
