import axios from '@/utils/ajaxRequest';

// 获取关于我们
export const getPage = data =>
  axios.request({
    url: 'aboutUs/getPage',
    method: 'post',
    data
  });