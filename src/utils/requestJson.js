import axios from "axios";
import vue from "vue";
//引入element-ui提示信息插件
import {Message} from 'element-ui'
vue.use(axios);
const service = axios.create({
    baseURL: "https://localhost:8080/",
    timeout:36000
})

service.interceptors.request.use(
    config => {
      config.headers['Content-Type'] = 'application/json';
      return config;
    },error => {
      return error;
    }
);

service.interceptors.response.use(
    response => {
      const res = response.data
      return res;
    },error => {
      return errorObj(error.message);
    }
);

function errorObj(msg) {
  Message({
    msg: msg,
    type:'error',
    duration: 3 * 1000
  })
  return Promise.reject();
}

export default service
