import axios from "axios";
import vue from "vue";
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

export default service
