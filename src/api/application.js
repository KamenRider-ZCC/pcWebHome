import axios from '@/utils/ajaxRequest';

// 获取所有应用分类
export const getType = data =>
  axios.request({
    url: 'applicationManagement/getType',
    method: 'post',
    data
  });
	
// 根据分类获取应用分页
export const getPage = data =>
  axios.request({
    url: 'applicationManagement/getPage',
    method: 'post',
    data
  });

// 根据ID查应用分类详情
export const getTypeId = data =>
  axios.request({
    url: 'applicationManagement/getTypeId',
    method: 'post',
    data
  });

// 根据id获取应用详情
export const getDetails = data =>
  axios.request({
    url: 'applicationManagement/getDetails',
    method: 'post',
    data
  });
