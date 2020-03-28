import request from './request.js'

let baseUrl = "http://123.207.32.32:8000/api/h3"

export function getMultData(){
  return request({
    url: baseUrl + '/home/multidata'
  })
}

export function getListData(type, page){
  return request({
    url: baseUrl + '/home/data',
    data: {
      type,
      page
    }
  })
}