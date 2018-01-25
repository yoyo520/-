Page({
  data: {
    animationDate: {},
    animationData1:{},
    animationData2:{},
    animationData3: {},
    animationData4:{},
    animationData5: {},
    animationData6: {},
  },
  onShow: function () {
    this.bg_slide();
    this.topToscroll();
    this.topToscroll1();
    this.smallBig();
    this.toTopbottom();
    this.toTopbottom1();
    this.togoBottom();
  },
  ontabview:function(){
    wx.navigateTo({
      url: '/pages/person_info/person_info',
    })
  },
  bg_slide:function(){
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
  topToscroll:function(){
    var animation = wx.createAnimation({
      duration: 1500,
      timingFunction: 'ease',
    })
    this.setData({
      animationData1: animation.top("-1rpx").opacity(1).step().export()
    })
  },
  topToscroll1: function () {
    console.log(1111)
    var animation = wx.createAnimation({
      duration: 1500,
      timingFunction: 'ease',
    })
    this.setData({
      animationData2: animation.top("39rpx").opacity(1).step().export()
    })
  },
  smallBig:function(){
    setTimeout(
      function(){
        var animation = wx.createAnimation({
          duration: 1000,
          timingFunction: 'ease',
        })
        this.setData({
          animationData3: animation.scale(1).opacity(1).step().export()
        })
      }.bind(this),500)
  },
  toTopbottom:function(){
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.setData({
      animationData4: animation.bottom("0rpx").step().export()
    })
  },
  toTopbottom1: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.setData({
      animationData5: animation.bottom("150rpx").step().export()
    })
  },
  togoBottom: function () {
    setTimeout(function(){
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease-out',
      })
      this.setData({
        animationData6: animation.top("0rpx").step().export()
      })
    }.bind(this),1200)

  }
})