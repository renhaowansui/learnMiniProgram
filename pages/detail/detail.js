// pages/detail/detail.js

import { 
  detailRequest,
  recommendRequest,
  goodBaseInfo,
  shopInfo,
  goodDetailInfo,
  goodRateInfo
} from '../../servies/detailRequest';

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid: null,
    topImages: [],
    goodBaseInfo: {},
    shopInfo: {},
    goodDetailInfo: {},
    paramInfo: {},
    rateInfo: {},
    recommends: {},
    showBackTopButton: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 根据参数iid请求详情页数据
    this._getGoodBaseInfo(options.iid)
    // 获取详情页商品列表推荐
    this._getRecommendInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /*
  * 网路请求方法
  */
  _getGoodBaseInfo(iid){
    detailRequest(iid).then(res => {
      // 获取轮播图
      const topImage = res.data.result.itemInfo.topImages
      this.setData({
        topImages: res.data.result.itemInfo.topImages
      })
      // 获取商品基本信息
      const gInfo = new goodBaseInfo(res.data.result)
      // 获取店铺基本信息
      const sInfo = new shopInfo(res.data.result.shopInfo)
      // 获取商品详细信息
      const dInfo = new goodDetailInfo(res.data.result.detailInfo)
      // 获取商品参数信息
      const pInfo = res.data.result.itemParams
      // 获取评论信息
      const rInfo = new goodRateInfo(res.data.result.rate.list[0])
      this.setData({
        iid,
        topImages: res.data.result.itemInfo.topImages,
        goodBaseInfo: gInfo,
        shopInfo: sInfo,
        goodDetailInfo: dInfo,
        paramInfo: pInfo,
        rateInfo: rInfo
      })
    }).catch(err => {
      wx.showToast({
        title: '加载失败',
        icon: "none",
        mask: "true",
        duration: 2000
      })
    })
  },
  _getRecommendInfo(){
    recommendRequest().then(res => {
      // 获取推荐商品列表
      const rList = res.data.data
      this.setData({
        recommends: rList
      })
    })
  },
  /*
  * 事件监听方法
  */
  onPageScroll(event){
    const scrollTop = event.scrollTop
    const isShowTabControl = scrollTop > 1000 ? true : false
    if (this.data.showBackTopButton !== isShowTabControl) {
      this.setData({
        showBackTopButton: isShowTabControl
      })
    }
  },
  handleBackTop(){
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 500,
    })
  },
  handleAddClick(){
    const good = {}
    good.iid = this.data.iid
    good.title = this.data.goodBaseInfo.title
    good.disc = this.data.goodDetailInfo.desc
    good.img = this.data.topImages[0]
    good.lowNowPrice = this.data.goodBaseInfo.lowNowPrice
    app.addCart(good)
  }
})