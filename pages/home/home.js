// pages/home/home.js
import { getMultData, getListData } from '../../servies/homeRequest';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    goodsList:{
      'pop': {page: 0, list: []},
      'new': {page: 0, list: []},
      'sell': {page: 0, list: []},
    },
    currentIndex: 0,
    currentGoodType: 'pop',
    showBackTopButton: false,
    fixedTabControl: false,
    tabControlTop: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取首页数据
    this._getMultData()
    // 获取商品列表数据
    this._getListData("pop")
    this._getListData("new")
    this._getListData("sell")
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
  * 网络请求方法
  */
  _getMultData(){
    getMultData().then(res => {
      this.setData({
        banners: res.data.data.banner.list,
        recommends: res.data.data.recommend.list
      })
    })
  },
  _getListData(type){
    this.data.goodsList[type].page++
    const goodsList = this.data.goodsList
    getListData(type, goodsList[type].page).then(res => {
      const good = res.data.data.list
      goodsList[type].list.push(...good)
      this.setData({
        goodsList: goodsList
      })
    })
  },
  /*
  * 业务处理犯法
  */
  onPageScroll(event){
    const scrollTop = event.scrollTop
    // 判断TabControl是否吸顶
    const isFixedTabControl = this.data.tabControlTop <= scrollTop? true : false
    if (this.data.fixedTabControl !== isFixedTabControl){
      this.setData({
        fixedTabControl: isFixedTabControl
      })
    }
    // 判断回到顶部按钮是否显示
    const isShowTabControl = scrollTop > 1000? true : false
    if (this.data.showBackTopButton !== isShowTabControl){
      this.setData({
        showBackTopButton: isShowTabControl
      })
    }
  },
  onReachBottom(){
    // 请求加载多个商品数据
    this._getListData(this.data.currentGoodType)
  },
  handRecommendsLoad(){
    const tabControl = wx.createSelectorQuery().select("#tabControl") .boundingClientRect(res => {
      this.data.tabControlTop = res.top
    }).exec()
  },
  handleTagClick(event){
    const index = event.detail.index
    this.data.currentIndex = index
    switch (index){
      case 0:
        this.data.currentGoodType = 'pop'
        break
      case 1:
        this.data.currentGoodType = 'new'
        break
      case 2:
        this.data.currentGoodType = 'sell'
    }
    this.setData({
      currentGoodType: this.data.currentGoodType
    })
  },
  handleBackTop(){
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 500,
    })
  }
})