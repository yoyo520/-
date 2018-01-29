//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    animationDate: {}, 
    animationData4:{},
    animationData5:{},
    animationData6:{},
    animationData7:{},
    flag:true,
    flag1:true,
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
      url: '/pages/paiweishai/paiweishai',
    })
  },
  bindPaitap:function(){
    wx.navigateTo({
      url: '/pages/panghangbang/panghangbang',
    })
  },
  bindThings: function () {
    wx.navigateTo({
      url: '/pages/things/things',
    })
  },
  bindTopic: function () {
    wx.navigateTo({
      url: '/pages/topic/topic',
    })
  },
  show_model:function(){
     console.log(3);
     console.log(this.data.flag1);
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'ease',
    });
    if (this.data.flag1 == true) {
      console.log("qqqqq")
      this.setData({
        animationData4: animation.scale(1.3).step().scale(1).step().export(),
        flag: false
      })
    } else if (this.data.flag1 == false) {
      this.setData({
        animationData4: animation.scale(0).step().export(),
        flag: true
      })
    }

  },
  show_model_bg: function () { 
    console.log(2)
    var animation = wx.createAnimation({
      duration: 0,
      timingFunction: 'ease-in',
    });
    // this.animation=animation;
    console.log(this.data.flag);
    if(this.data.flag==true){
      console.log("wwwww");
      this.setData({
        animationData5: animation.scale(1).step().export(),
        flag: false
      })
    } else if (this.data.flag==false){
      console.log("zzzz");
      this.setData({
        animationData5: animation.scale(0).step().export(),
        flag: true
      })
    }
  },
  circle_model: function () {
    console.log("cccc");
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    }); 
    this.setData({
      animationData7: animation.rotateY("180deg").step().export()
    });
  },
  bindClick: function () {
    console.log(1);
    this.show_model_bg();
    setTimeout(function(){
      this.show_model();
    }.bind(this),10);
      this.circle_model();
  },
  bindClickclose: function () {
    console.log('cccc');
    this.show_model_bg();
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
