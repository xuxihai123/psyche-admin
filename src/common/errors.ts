/* tslint:disable */
class NetworkError extends Error {
  private httpCode: number;
  constructor(httpCode: number, message: string) {
    super(message);
    this.httpCode = httpCode;
  }
}

class BuessinessError extends Error {
  private code: number;
  constructor(code: number, message: string) {
    super(message);
    this.code = code;
  }
}
/* tslint:enable */
export default {NetworkError, BuessinessError};
