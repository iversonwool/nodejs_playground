const http = require("http");
const URL = require("url").URL;
const baseMongo = require("./mongodb");

const PORT = 9527;
const HOST = "http://127.0.0.1";

const server = http.createServer(async (req, res) => {
  //处理请求路径相关
  const urlObj = new URL(req.url, `http://${req.headers.host}`);
  const pathname = urlObj.pathname;
  // 只响应获取用户列表的请求
  if (pathname !== "/v1/users") {
    handleResponse(res, false, "path not found", null, 404);
  }
  //处理请求参数
  const ids = urlObj.searchParams.get("ids");
  if (!ids) {
    handleResponse(res, false, "I need params");
  }
  //从db数据库请求数据
  //id===1001和1002有数据
  const users = await queryData({ id: { $in: ids.split(",") } });
  handleResponse(res, true, 'success', users)

  // res.statusCode = 200;
  // res.writeHead(200, { "Content-Type": "text/plain" });
  // console.log('url',req.url);
  // console.log('headers.host',req.headers.host)
  // const response = JSON.stringify(req.headers.origin);
  // res.write("response");
  // res.end();
});

server.listen(PORT, () => {
  console.log(`listening on ${HOST}:${PORT}`);
});

/**
 * 构造符合我们现在中台的返回结构
 */
function handleResponse(res, success, msg, rows, httpStatus = 200) {
  let response;
  if (!success) {
    response = {
      result: "0", // maybe not zero
      msg: msg ? msg : "default error msg",
      rows: rows ? rows : "default result",
    };
  } else {
    response = {
      result: "1", // 1 === 正确的返回
      msg: msg ? msg : "default success msg",
      rows: rows ? rows : "defautl result",
    };
  }

  res.writeHead(httpStatus, { "Content-Type": "text/plain" });
  res.write(JSON.stringify(response));
  res.end();
}

async function queryData(queryOption) {
  const client = await baseMongo().getClient();
  const collection = client.db("nodejs_cloumn").collection("user");
  const queryArr = await collection.find(queryOption).toArray();

  return queryArr;
}
