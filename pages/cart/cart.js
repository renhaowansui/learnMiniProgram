// pages/cart/cart.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList: [],
    isAllCheck: false,
    price: 0,
    count: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _that = this
    // 第一次获取列表数据
    this._getCartList()
    app.addCartCallBack = () => {
      this._getCartList()
    }
    app.changeGoodsState = (good) => {
      let isHave = app.globalData.cartList.find(item => {
        return item.iid === good.iid
      })
      isHave.check = !isHave.check
      let isAllHave = app.globalData.cartList.every(item => {
        return item.check === true
      })
      this._getCartList()
      this.setData({ isAllCheck: isAllHave })
      this.changeData()
    }
  },
  
  onShow: function(){
    wx.setNavigationBarTitle({
      title: '购物车(' + this.data.cartList.length + ')'
    })
  },
  /*
  * 业务函数
  */
  _getCartList(){
    const getList = app.globalData.cartList
    this.setData({
      cartList: getList
    })
  },
  handleAllCheckClick(){
    let isAll = !this.data.isAllCheck
    let getList = app.globalData.cartList
    if(!getList.length) return
    if(isAll){
      getList.forEach(item => {
        item.check = true
      })
    }else{
      getList.forEach(item => {
        item.check = false
      })
    }
    this.setData({
      isAllCheck: isAll,
      cartList: getList,
    })
    this.changeData()
  },
  changeData(){
    let cPrice = 0
    let cCount = 0

    this.data.cartList.forEach(item => {
      if (item.check) {
        cCount++
        cPrice += item.lowNowPrice * item.count
      }
    })
    this.setData({
      price: cPrice.toFixed(2),
      count: cCount
    })
  }
})