import axios from '@/utils/ajaxRequest'

// 获取上云企业趋势图
export const getTrendgram = params =>
  axios.request({
    url: 'bigscreen/enterprise/getTrendgram',
    method: 'get',
    params
  })

// 获取企业类型饼图
export const getEnterpriseTypePieGraph = () =>
  axios.request({
    url: 'bigscreen/enterprise/getEnterpriseTypePieGraph',
    method: 'get'
  })

// 获取区域企业及上云设备柱状图
export const getEnterpriseAndEquipmentRanking = (params) =>
  axios.request({
    url: 'bigscreen/enterprise/getEnterpriseAndEquipmentRanking',
    method: 'get',
    params
  })

// 获取上云设备趋势图
export const equipmentGetTrendgram = (params) =>
  axios.request({
    url: 'bigscreen/equipment/getTrendgram',
    method: 'get',
    params
  })

// 获取设备及采集点报警柱状图
export const getWarningsByDate = (params) =>
  axios.request({
    url: 'bigscreen/equipment/getWarningsByDate',
    method: 'get',
    params
  })

// 获取设备异常报警信息（分页）
export const getWarningsPage = (params) =>
  axios.request({
    url: 'bigscreen/warnings/getWarningsPage',
    method: 'get',
    params
  })

// 获取头部信息
export const getHeadInfo = () =>
  axios.request({
    url: 'bigscreen/enterprise/getHeadInfo',
    method: 'get'
  })

// 获取企业列表
export const findByEnterpriseName = (params) =>
  axios.request({
    url: 'bigscreen/enterprise/findByEnterpriseNamek',
    method: 'get',
    params
  })

// 获取设备列表
export const findByEquipmentName = (params) =>
  axios.request({
    url: 'bigscreen/equipment/findByEquipmentName',
    method: 'get',
    params
  })

// 获取企业坐标
export const getCoordinateList = () =>
  axios.request({
    url: 'bigscreen/enterprise/getCoordinateList',
    method: 'get'
  })

// 获取设备坐标
export const getEquipmentList = () =>
  axios.request({
    url: 'bigscreen/equipment/getCoordinateList',
    method: 'get'
  })

// 根据ID查询企业详细信息
export const findEnterpriseById = (params) =>
  axios.request({
    url: 'bigscreen/enterprise/findById',
    method: 'get',
    params
  })

// 根据ID查询设备详细信息
export const findEquipmentById = (params) =>
  axios.request({
    url: 'bigscreen/equipment/findById',
    method: 'get',
    params
  })
