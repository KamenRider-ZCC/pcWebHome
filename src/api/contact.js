import axios from '@/utils/ajaxRequest';

// 用户反馈
export const feedback = data =>
  axios.request({
    url: 'feedback/addOrEdit',
    method: 'post',
    data
  });