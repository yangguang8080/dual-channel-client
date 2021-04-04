import request from '@/utils/request'

// 查询测试列表
export function listTest(query) {
  return request({
    url: '/system/test/list',
    method: 'get',
    params: query
  })
}

// 查询测试详细
export function getTest(testId) {
  return request({
    url: '/system/test/' + testId,
    method: 'get'
  })
}

// 新增测试
export function addTest(data) {
  return request({
    url: '/system/test',
    method: 'post',
    data: data
  })
}

// 修改测试
export function updateTest(data) {
  return request({
    url: '/system/test',
    method: 'put',
    data: data
  })
}

// 删除测试
export function delTest(testId) {
  return request({
    url: '/system/test/' + testId,
    method: 'delete'
  })
}
