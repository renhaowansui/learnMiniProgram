import request from './request.js'

let baseUrl = "http://123.207.32.32:8000/api/h3"

export function detailRequest(iid){
  return request({
    url: baseUrl + "/detail",
    data: {
      iid
    }
  })
}

export function recommendRequest(){
  return request({
    url: baseUrl + "/recommend"
  })
}

export class goodBaseInfo{
  constructor(data){
    this.title = data.itemInfo.title
    this.lowNowPrice = data.itemInfo.lowNowPrice
    this.price = data.itemInfo.price
    this.oldPrice = data.itemInfo.oldPrice
    this.discountDesc = data.itemInfo.discountDesc
    this.cFav = data.itemInfo.cFav
    this.columns = data.columns
    this.services = data.shopInfo.services
  }
}

export class shopInfo{
  constructor(data){
    this.shopLogo = data.shopLogo
    this.name = data.name
    this.cGoods = data.cGoods
    this.cSells = data.cSells
    this.score = data.score
  }
}

export class goodDetailInfo{
  constructor(data){
    this.desc = data.desc
    this.key = data.detailImage[0].key
    this.list = data.detailImage[0].list
  }
}

export class goodRateInfo{
  constructor(data){
    this.avatar = data.user.avatar
    this.uname = data.user.uname
    this.content = data.content
    this.created = data.created
    this.style = data.style
  }
}