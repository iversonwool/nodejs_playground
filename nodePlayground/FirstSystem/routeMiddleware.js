/**
 * 处理请求路径
 * 使请求对应到正确的接口
 */

const handleResponse = require("./utils");

module.exports = function () {
  return async function (ctx, next) {
    const { request } = ctx;
    const urlObj = new URL(request.url, `http://${request.headers.host}`);
    let pathname = urlObj.pathname;
    // console.log("pathname: " + pathname);

    const pathnameComponents = pathname.split("/");
    pathnameComponents.shift();
    // console.log("lenght", pathnameComponents.length);
    //一些路径处理逻辑 真实项目不会是像这样
    if (pathnameComponents.length < 2) {
      handleResponse(ctx, false, "path not found", null, 404);
      await next();
      return;
    }

    const methodName = pathnameComponents.pop();
    if (!methodName) {
      handleResponse(ctx, false, "path not found", null, 404);
      await next();
      return;
    }

    let ControllerClass;
    try {
      const filename = pathnameComponents.join("/")
      // console.log(filename)
      ControllerClass = require(`./controller/${filename}`);
    } catch (error) {
      if (error.code !== "MODULE_NOT_FOUND") {
        //do something
      }
      handleResponse(ctx, false, "path not found", null, 404);
      await next();
      return;
    }
    // console.log('controller', ControllerClass)

    try {
      const controller = new ControllerClass(ctx);

      if (!controller[methodName]) {
        handleResponse(ctx, false, "path not found", null, 404);
        await next();
        return
      }
      if (controller[methodName][Symbol.toStringTag] === "AsyncFunction") {
        // 判断是否为异步 promise 方法，如果是则使用 await
        // ctx.currentExist = true;
        // await controller[methodName]();
        // await next();
        // return 
      } else {
        // 普通方法则直接调用
        ctx.currentExist = true;
        controller[methodName]();
        await next();
        return
      }
    } catch (error) {
      if (error.code !== "MODULE_NOT_FOUND") {
        //do something
      }

      handleResponse(ctx, false, "server error", null, 500);
      await next();
      return;
    }
  };
};
