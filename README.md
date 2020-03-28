# miniMall-MiniProgram
1.0 learning MiniProcess

###目录结构
  ├── app                         //入口文件
  │   └── api.js                  //入口文件
  ├── assets                      //图片文件
  ├── components                  //组件
  │   ├── swiper                  //轮播图组件
  │   ├── goodList                //商品列表组件
  │   ├── goodList-item           //商品组件
  │   ├── tabControl              //选项栏组件
  │   ├── backTop                 //返回顶部按钮组件
  │   └── check-icon              //图标组件
  ├── pages  
  │   ├── home                    //首页
  │   ├── detail                  //详情页
  │   ├── category                //分类页
  │   └── cart                    //购物车
  ├── servies                     //请求服务文件

学习记录：
经过几天的学习，上手的小项目

其中遇到个小问题：
  应用场景：动态修改至全局属性的商品信息，购物车页面如何监听获取
  思路：使用手动回调或者watch监听属性，而发现小程序官方拓展组件behavior只适用于组件内部，无法监听全局属性，而自定义watch方法回调，可监听到属性更改，不过好像监听不到数组的pop、push方法更改。目前采取的手动回调方法，之后再进一步了解...
