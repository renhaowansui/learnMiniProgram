// pages/cart/childComponents/computed/computed.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isAllCheck: {
      type: Boolean
    },
    price: {
      type: Number
    },
    count: {
      type: Number
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
    allCheckClick(){
      this.triggerEvent("allCheckClick")
    }
  }
})
