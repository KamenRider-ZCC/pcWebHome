import axios from '@/utils/ajaxRequest';

// 用户退出
export const logout = data =>
  axios.request({
    url: 'home/layOut',
    method: 'post',
    data: {
      data
    }
  });

// 不是用户体系的，测试使用
export const getData = data =>
  axios.request({
    url: '/daren/financial/money_log',
    method: 'post',
    data
  });

// 修改密码
export const forgetPassword = data =>
  axios.request({
    url: 'register/forgetPassword',
    method: 'post',
    data: {
      data
    }
  });

// 注册
export const register = data => {
  delete data['cPassword'];
  return axios.request({
    url: 'register/register',
    method: 'post',
    data: {
      data
    }
  });
};

// 密码登录
export const loginByPassword = data => {
  return axios.request({
    url: 'register/loginByPassword',
    method: 'post',
    data: {
      data
    }
  });
};
// 验证码登录
export const loginByCode = data =>
  axios.request({
    url: 'register/loginByCode',
    method: 'post',
    data: {
      data
    }
  });

// 用户登录
export const getMenu = data =>
  axios.request({
    url: 'home/userMenu',
    method: 'post',
    data
  });

// 更换用户头像
export const updateImage = data =>
  axios.request({
    url: 'home/updateImage',
    method: 'post',
    data: {
      data
    }
  });

// 更换密码
export const updatePassword = data =>
  axios.request({
    url: 'home/updatePassword',
    method: 'post',
    data: {
      data
    }
  });
