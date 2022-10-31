import axios from '@/utils/ajaxRequest';

// 获取信息
export const getInfo = params =>
  axios.request({
    url: '/art/v2/article/page',
    method: 'get',
    params
  });
