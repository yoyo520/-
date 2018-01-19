Page({
  data: {
    animationDate: {},
    animationData1:{},
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '/pages/loadpage/loadpage'
    })
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
  // onShow:function(){
  //   var animation1 = wx.createAnimation({
  //     duration: 1000,
  //     timingFunction: 'ease',
  //   })
  //   animation1.translateY(-300).step().translateY(0).step()
  //   this.setData({
  //     animationData1: animation1.translateY(-300).export()
  //   })
  // },
});