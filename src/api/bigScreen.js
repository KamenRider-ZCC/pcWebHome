import axios from '@/utils/ajaxRequest'

// 获取关于我们
export const getTrendgram = params =>
  axios.request({
    url: 'bigscreen/enterprise/getTrendgram',
    method: 'get',
    params
  })
