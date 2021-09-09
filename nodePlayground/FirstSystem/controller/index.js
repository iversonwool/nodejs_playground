const handleResponse = require("../utils");

class BaseController {
  constructor(ctx) {
    this.ctx = ctx;
  }

  handleData(success, msg, data, httpStatus = 200) {
    handleResponse(this.ctx, success, msg, data, httpStatus);
  }
}

module.exports = BaseController;
