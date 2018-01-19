//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    animationDate:{}
  },
  onShow: function () {
    var animation = wx.createAnimation({
      duration: 10000,
      timingFunction: 'ease',
    })
    this.setData({
      animationData: animation.scale(2.5, 2.5).translateX(80).translateY(80).translateZ(80).step().scale(2.5, 2.5).translateX(-80).translateY(-80).translateZ(-80).step().export()
    })
    setInterval(function () {
      animation.scale(2.5, 2.5).translateX(80).translateY(80).translateZ(80).step().scale(2.5, 2.5).translateX(-80).translateY(-80).translateZ(-80).step();
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 10000)
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '/pages/paiweishai/paiweishai'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
