export default function loginRequest(options){
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      data: options.data || {},
      header: options.header || {},
      method: options.method || "get",
      success: res => {
        console.log(res)
        if (!res.data.error){
          const token = res.data.token
          resolve(token)
        }else{
          reject("登录失败")
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  })
}