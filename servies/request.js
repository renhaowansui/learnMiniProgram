export default function request(options){
  wx.showLoading({
    title: '加载中',
    mask: 'true'
  })
  return new Promise((reslove, reject) => {
    wx.request({
      url: options.url,
      data: options.data || {},
      header: options.header || {},
      method: options.method || "get",
      success: res => {
        if (res.statusCode === 200){
          reslove(res)
        }else{
          reject(res)
        }
      },
      fail: function (res) {},
      complete: function (res) {
        wx.hideLoading()
      },
    })
  })
}