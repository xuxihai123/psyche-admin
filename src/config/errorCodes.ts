const networkCodes: {[key: string]: string} = {
  504: '网关超时',
  502: '网关错误',
  500: '服务器错误',
  404: '资源未找到',
  403: '请求被禁止',
  401: '请求未认证',
  400: '糟糕的请求',
};

const businessCodes: {[key: string]: string} = {
  4000: '糟糕的请求',
};

export default {network: networkCodes, business: businessCodes};
