// pages/category/childComponents/menu/menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    menuList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件attached 生命周期
   */
  attached(){
    console.log(this.data.menuList)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(event){
      let index = event.target.dataset.index
      this.setData({
        currentIndex: index
      })
      const maitKey = this.data.menuList[index].maitKey
      this.triggerEvent('menuClick', index)
    }
  }
})
