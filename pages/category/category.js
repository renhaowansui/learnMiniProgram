// pages/category/category.js

import {
  categoryRequest,
  subcategoryRequest,
  subDetailRequest
} from '../../servies/categoryRequest.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu: [],
    subcategory: [],
    subDetail: [],
    scrollTop: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getMenu()     
  },
  onReady: function () {

  },
  /**
   * 网络请求方法
   */
  _getMenu() {
    categoryRequest().then(res => {
      this.setData({
        menu: res.data.data.category.list
      })
      this._getSubcategory(0)
      this._getSubDetail(0, 'pop')
    })
  },
  _getSubcategory(currentIndex) {
    console.log(this.data)
    const maitKey = this.data.menu[currentIndex].maitKey
    subcategoryRequest(maitKey).then(res => {
      this.setData({
        subcategory: res.data.data.list
      })
    })
  },
  _getSubDetail(currentIndex, type) {
    const miniWallkey = this.data.menu[currentIndex].miniWallkey
    subDetailRequest(miniWallkey, type).then(res => {
      const subList = {}
      subList.list = res.data
      this.setData({
        subDetail: subList
      })
    })
  },
  /*
  * 业务方法
  */
  handleMenuClick(event) {
    // 重新获取该分类信息
    this._getSubcategory(event.detail)
    this._getSubDetail(event.detail, 'pop')
    // 右边重新回到滑动顶部
    this.setData({
      scrollTop: '0',
    })
  }
})