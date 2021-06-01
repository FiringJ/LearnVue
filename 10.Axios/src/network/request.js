import axios from "axios";

/* 方式1
export function request(config, success, failure) {
  // 1.创建instance
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.发送网络请求
  instance(config)
    .then(res => {
      success(res)
    })
    .catch(err => {
      failure(err)
    })
}*/

/* 方式2
export function request(config) {
  // 1.创建instance
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.发送网络请求
  instance(config.baseConfig)
    .then(res => {
      config.success(res)
    })
    .catch(err => {
      config.failure(err)
    })
}*/

/* 方式3
export function request(config) {
  return new Promise((resolve, reject) => {
    // 1.创建instance
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })

    // 2.发送网络请求
    instance(config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}*/

export function request(config) {
  return new Promise((resolve, reject) => {
    // 1.创建instance
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })

    // 2.axios的拦截器
    instance.interceptors.request.use(
      /*
        1.config中的信息不符合服务器的需求
        2.发送网络请求时希望显示加载图标
        3。网络请求时携带特殊信息（token）
      */
      config => {
        console.log(config);
        return config
      },
      err => {
        console.log(err);
      }
    )
    instance.interceptors.response.use(
      res => {
        console.log(res);
        return res.data
      },
      err => {
        console.log(err);
      }
    )

    // 3.发送网络请求
    return instance(config)
  })
}
