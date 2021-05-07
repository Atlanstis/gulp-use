// 回调函数方式
exports.callback = (done) => {
  console.log('callback task')
  done()
}
// 回调函数方式，通知失败
exports.callback_error = (done) => {
  console.log('callback_error task')
  done(new Error('task fail'))
}

// promise 方式
exports.promise = () => {
  console.log('promise task')
  return Promise.resolve()
}

// promise 方式，通知失败
exports.promise_error = () => {
  console.log('promise_error task')
  return Promise.reject(new Error('task fail'))
}

const timeout = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

// async 方式，Node 8 以上
exports.async = async () => {
  await timeout(1000)
  console.log('async task')
}

const fs = require('fs')

// stream 方式
exports.stream = () => {
  const readStream = fs.createReadStream('package.json')
  const writeStream = fs.createWriteStream('.env.local')
  readStream.pipe(writeStream)
  // 监听了 stream 的结束
  return readStream
}
