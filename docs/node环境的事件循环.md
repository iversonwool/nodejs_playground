### nodejs在前端工程和后端服务应用的区别



#### 循环原理

![nodeje事件循环原理图](https://s0.lgstatic.com/i/image6/M00/13/1F/CioPOWBB0_iAYF-EAACboqFVHbQ092.png)

1. timers：本阶段执行已经被 setTimeout() 和 setInterval() 调度的回调函数
2. pending callbacks：本阶段执行某些系统操作（如 TCP 错误类型）的回调函数。
3. idle、prepare：仅系统内部使用，你只需要知道有这 2 个阶段就可以。
4. poll：检索新的 I/O 事件，执行与 I/O 相关的回调，其他情况 Node.js 将在适当的时候在此阻塞。
5. check：setImmediate() 回调函数在这里执行，setImmediate 并不是立马执行，而是当事件循环 poll 中没有新的事件处理时就执行该部分
6. close callbacks：执行一些关闭的回调函数，如 socket.on('close', ...)。







#### 循环起点

Node.js 事件循环的发起点有 4 个：

1. Node.js 启动后；
2. setTimeout 回调函数；
3. setInterval 回调函数；
4. 也可能是一次 I/O 后的回调函数。







#### nodejs事件循环

![事件循环](https://s0.lgstatic.com/i/image6/M00/13/20/CioPOWBB1rCAM7NxAAFF-n4jMtY220.png)

- 微任务：在 Node.js 中微任务包含 2 种——process.nextTick 和 Promise。微任务在事件循环中优先级是最高的，因此在同一个事件循环中有其他任务存在时，优先执行微任务队列。并且process.nextTick 和 Promise 也存在优先级，process.nextTick 高于 Promise。

- 宏任务：在 Node.js 中宏任务包含 4 种——setTimeout、setInterval、setImmediate 和 I/O。宏任务在微任务执行之后执行，因此在同一个事件循环周期内，如果既存在微任务队列又存在宏任务队列，那么优先将微任务队列清空，再执行宏任务队列。







思考：当微任务和宏任务又产生新的微任务和宏任务时，又应该如何处理呢？？？







总结：**Node.js** 本身**是**一个**多线程**平台，而它对JavaScript 层面的任务处理**是单线程**的。

