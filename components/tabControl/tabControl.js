// components/tabControl/tabControl.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabTag: {
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
   * 组件的方法列表
   */
  methods: {
    tagClick(event){
      const index = event.currentTarget.dataset.index
      if(index !== this.data.currentIndex){
        this.setData({
          currentIndex: index
        })
      }
      this.triggerEvent("handleTagClick", {index})
    }
  }
})
