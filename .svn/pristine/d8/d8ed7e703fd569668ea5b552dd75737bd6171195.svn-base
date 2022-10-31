import axios from '@/utils/ajaxRequest';

// 获取类别筛选
export const getCategory = data =>
  axios.request({
    url: 'dem/v2/serviceClassification/list',
    method: 'get',
    data
  });

// 获取类别筛选page
export const getPage = params =>
  axios.request({
    url: 'dem/v2/demandTable/page',
    method: 'get',
    params
  });

// 获取软件list
export const getSoftPage = params =>
  axios.request({
    url: 'art/v2/article/page',
    method: 'get',
    params
  });
