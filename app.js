//app.js
import loginRequest from 'servies/loginRequest.js'

App({
  onLaunch: function () {
    // 获取本地存储token
    const token = wx.getStorageSync("token")
    // 验证本地token
    if (token && token.length) {
      // 验证token是否有效
      this.check_token(token)
    } else {
      // 重新登录
      console.log('重新登录')
      this.login()
    }
  },
  login() {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        const code = res.code
        loginRequest({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          }
        }).then(res => {
          this.globalData.token = res
          wx.setStorageSync('token', this.globalData.token)
          console.log("登录获取token")
        }).catch(err => {
          console.log(err)
        })
      }
    })
  },
  check_token(token) {
    loginRequest({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: { token }
    }).then(() => {
      console.log("验证成功")
    }).catch(err => {
      console.log(err)
    })
  },
  /*
  * 全局变量
  */
  globalData: {
    token: null,
    cartList: [],
    num: []
  },
  /*
  * 监听全局变量
  */
  // watch(method){
  //   var obj = this.globalData
  //   Object.defineProperty(obj, 'num', {
  //     configurable: true,
  //     enumerable: true,
  //     set: function (value) {
  //       this._name = value;
  //       method(value);
  //     },
  //     get: function () {
  //       return this._name
  //     }
  //   })
  // },
  /*
  * 修改全局变量函数
  */
  addCart(good) {
    const isHave = this.globalData.cartList.find(item => {
      return item.iid === good.iid
    })
    if (isHave) {
      isHave.count++
    } else {
      good.count = 1
      good.check = false
      this.globalData.cartList.push(good)
    }
    // this.globalData.num = ["1"]
    if (this.addCartCallBack) {
      this.addCartCallBack()
    }
    wx.showToast({
      title: '已添加购物车',
      mask: 'true',
      duration: 2000
    })
  }
})