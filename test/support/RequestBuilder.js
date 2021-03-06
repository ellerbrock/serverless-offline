'use strict';

module.exports = class RequestBuilder {
  constructor(method, path) {
    this.request = {
      method: method.toUpperCase(),
      headers: {},
      unprocessedHeaders: {},
      params: {},
      route: {
        path,
      },
      query: {},
      payload: null,
      info: {
        remoteAddress: '127.0.0.1',
      },
    };
  }

  addHeader(key, value) {
    this.request.headers[key] = value;
    this.request.unprocessedHeaders[key] = value;
  }

  addBody(body) {
    this.request.payload = body;
  }

  addParam(key, value) {
    this.request.params[key] = value;
  }

  toObject() {
    return this.request;
  }
};
