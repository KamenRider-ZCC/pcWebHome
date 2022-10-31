import axios from '@/utils/ajaxRequest';

// 查询
export const getPage = data =>
  axios.request({
    url: 'footer/getPage',
    method: 'post',
    data
  });