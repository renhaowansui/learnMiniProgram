// components/goodList-item/goodList-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    good: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goodClick(){
      const good = this.data.good
      const iid = good.iid || good.item_id
      wx.navigateTo({
        url: '/pages/detail/detail?iid=' + iid,
      })
    }
  }
})
