/**
 * 构造符合我们现在中台的返回结构
 */
function handleResponse(ctx, success, msg, rows, httpStatus = 200) {
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
  ctx.response.status = httpStatus;
  ctx.response.type = "text/plain";
  ctx.response.body = response;
  // res.writeHead(httpStatus, { "Content-Type": "text/plain" });
  // res.write(JSON.stringify(response));
  // res.end();
}

module.exports = handleResponse;
