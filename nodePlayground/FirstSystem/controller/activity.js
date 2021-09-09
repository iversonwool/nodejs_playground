const BaseController = require("./index");

class Activity extends BaseController {
  list() {
    return this.handleData(true, "success", [
      {
        id: "1",
        name: "抢洗头券",
        desc: "周六日前往，可免费体验",
        image: "xxxx",
        start_time: 1422222333,
        end_time: 1444444444,
      },
      {
        id: "2",
        name: "抢打车券",
        desc: "周六日前往，可免费体验",
        image: "xxxx",
        start_time: 1422222333,
        end_time: 1444444444,
      },
    ]);
  }

  detail() {
    //其实这里应该还要处理请求路径上的query
    return this.handleData(true, "success", {
      id: "1",
      name: "抢洗头券",
      desc: "周六日前往，可免费体验",
      image: "xxxx",
      start_time: 1422222333,
      end_time: 1444444444,
    });
  }
}

module.exports = Activity;
