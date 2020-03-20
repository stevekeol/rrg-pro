import axios from 'axios';

//封装请求方法: get
export function get(url, params) {
  if(!params) {
    return axios.get(url);
  }
  let paramsStr = '';
  Object.keys(params).forEach(key => {
    const value = params[key];
    if(value instanceof Array) {
      value.forEach(item => paramsStr += `${key}=${item}&`)
    }else {
      paramsStr += `${key}=${value}&`;
    }
  });
  return axios.get(`${url}?${paramsStr}`);
}

//封装请求方法: post
export function post(url, body, params) {
  return axios.post(url, body, {params});
}

//指定api-baseUrl
const basic = 'https://czr-api.vipdesk.cn/api/';
// const basic = 'http://localhost:8181/api/';

//导出所有的api（仅仅是api的url部分）
export const API_GET_HOSPITALS = `${basic}hospitals`;

export const API_GET_HOSPITAL_BY_ID = id => `${basic}hospitals/${id}`;

export const API_GET_SUPPLIES = `${basic}supplies`;

export const API_GET_NEARBYHOSPITALS = `${basic}findNearbyHospitals`;

export const API_GET_TOTALDEMANDS = `${basic}getTotalDemands`;
