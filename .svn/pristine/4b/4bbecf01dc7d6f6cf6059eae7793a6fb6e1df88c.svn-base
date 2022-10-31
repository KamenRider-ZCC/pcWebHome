import axios from '@/utils/ajaxRequest';

// login
export const getLogin = data =>
  axios.request({
    url: '/usr/v2/reglog/login',
    method: 'post',
    data
  });

// 检验用户名是否存在
export const checkUserName = params =>
  axios.request({
    url: '/usr/v2/user',
    method: 'get',
    params
  });

// 注册
export const register = data =>
  axios.request({
    url: '/usr/v2/user',
    method: 'post',
    data
  });
