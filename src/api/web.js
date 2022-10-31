import axios from '@/utils/ajaxRequest';

// 获取列表
export const getPage = data =>
  axios.request({
    url: 'settingCon/getPage',
    method: 'post',
    data
  });