import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// const BASE_URL = 'http://183.6.57.236:30000'
//const BASE_URL = '/api'

// create an axios instance
const service = axios.create({
//  baseURL: BASE_URL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
// request拦截器
service.interceptors.request.use(
    config => {
    //  config.headers['Content-Type'] = 'text/plain' // 关键所在
      config.headers['Content-Type'] = "application/json; charset=utf-8;"
      return config
    },
    error => {
      console.log(error) // for debug
      Promise.reject(error)
    }
  )
   
  
   

export default service