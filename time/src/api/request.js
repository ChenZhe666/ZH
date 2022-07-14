import axios from "axios";
// 导入message消息提示组件
import { Message } from "element-ui";
import { setItem, getItem } from "../utils/storage";

// 导入自定义消息提示
import exceptionMessage from "../utils/exception-message";
const service = axios.create({
  baseURL: "http://62.234.20.56:9001/sys",
  timeout: 5000,
});

service.interceptors.request.use(
  function (config) {
    console.log(config)
    const token = getItem("token");
    config.headers.token = token
    console.log(config.data)
    return config;
   
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  function (response) {
    if (response.data.code === 200) {
      return response.data.data;
    }
    _showErrorMessage(response.data.code, response.data.msg);
    // console.log(response);
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

const _showErrorMessage = (code, msg) => {
  const message = exceptionMessage[code] || msg || "未知错误";
  Message({ message, type: "error" });
};

const request = (options) => {
  if (options.method.toLowerCase() === "get") {
    options.params = options.data || {};
  }
  return service(options);
};
export default request;
