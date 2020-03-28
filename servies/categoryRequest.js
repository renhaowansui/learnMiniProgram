import request from './request.js'

let baseUrl = "http://123.207.32.32:8000/api/h3"

export function categoryRequest(){
  return request({
    url: baseUrl + "/category"
  })
}

export function subcategoryRequest(maitKey){
  return request({
    url: baseUrl + "/subcategory",
    data: {
      maitKey
    }
  })
}

export function subDetailRequest(miniWallkey, type){
  return request({
    url: baseUrl + "/subcategory/detail",
    data: {
      miniWallkey,
      type
    }
  })
}