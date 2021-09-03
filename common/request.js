import config from "./config";

export const apiRequest = (params) => {
  return new Promise((resolve, reject) => {
    let url = config.baseUrl + params.url;
    return uni.request({
      url: url,
      data: params.query,
      method: params.method,
      timeout: config.timeout,
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      },
      complete: () => {
        console.log("请求完成");
      },
    });
  });
};
