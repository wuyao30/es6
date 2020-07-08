const promise = new Promise(function (resolve, reject) {
  if (NaN === NaN) {
    resolve('salted fish')
  } else {
    reject('hello world')
  }
})

promise.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
