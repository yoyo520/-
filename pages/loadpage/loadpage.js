Page({
  data: {
    fontSize: 1,
    animationData: {},
    animationData2: null,
    animationData3: null,
    animationData4: null,
    animationData5: null,
    animationData6: null,
    animationData7: null,
    animationData8: null,
    animationData9: null,
    animationData10: null,
    animationData11: null,
    animationData12: null,
    animationData13: null,
    second: 10,
    animationData14:null,
    animationDate15:null,
    animationDate16:null,
    animationDate17: null,
  },
  ontab:function(){
   
  },
  onShow: function () {
    //箭头函数
    this.side().then(val => {
      this.slideIntoleft();
      this.slideIntoright();
    }).then(val => {
      this.bigTosmalltobig();
    }).then(val => {
      this.displayNone();
    }).then(val => {
      this.backInto();
    }).then(val => {
      this.blueToleft();
      this.redToright();
      this.bottomTobottom();
    }).then(val => {
      this.leixingTopto();
      this.topicTobig();
    }).then(val => {
      this.topBg();
      this.topBgTime();
      countdown(this);
      this.topic_title();
      this.pregress_title();
      this.pregress_title_right();
      this.pregress_title_text();
    })
    function countdown(that) { 
      var second = that.data.second
       if (second == 0) { 
         that.setData({ second:0 }); 
       return 
       }
        var time = setTimeout(
          function () { 
            that.setData({ second: second - 1 }); 
        countdown(that);
         }, 1000) 
        }
  },
  onload: function () {

  },
  side: function () {
    return new Promise(resolve => {
      var animation = wx.createAnimation({
        duration: 150,
        timingFunction: 'ease-in',
      });
      setTimeout(() => {
        this.setData({
          animationData: animation.top(-500).step().export()
        });
        console.log(4)
        resolve();
      }, 4000)
    })
  },
  slideIntoleft: function () {
    console.log(3333)
    var animation = wx.createAnimation({
      duration: 150,
      timingFunction: 'ease-in',
    });
    this.setData({
      animationData2: animation.left(-100).step().export()
    })
  },
  slideIntoright: function () {
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-in',
    });
    this.setData({
      animationData3: animation.left('380rpx').step().left('400rpx').step().export()
    });
  },
  bigTosmalltobig: function () {
    setTimeout(function () {
      var animation = wx.createAnimation({
        duration: 600,
        timingFunction: 'ease-in',
      });
      this.setData({
        animationData4: animation.translateX('-50%').translateY('-50%').opacity(1).scale(0.5).step().scale(4).opacity(0).step().export()
      });
    }.bind(this), 1000);
  },
  displayNone: function () {
    setTimeout(function () {
      var animation = wx.createAnimation({
        duration: 0,
        timingFunction: 'ease-in',
      });
      this.setData({
        animationData5: animation.opacity(0).height(0).step().export()
      });
    }.bind(this), 2500)
  },
  backInto: function () {
    var animation = wx.createAnimation({
      duration: 0,
      timingFunction: 'linear',
    });
    this.setData({
      animationData6: animation.opacity(1).height("1200rpx").step().export()
    });
  },
  blueToleft: function () {
    setTimeout(function () {
      var animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'linear-in',
      });
      this.setData({
        animationData7: animation.left("-25rpx").step().export()
      });
    }.bind(this), 2500)
  },
  redToright: function () {
    setTimeout(function () {
      var animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'linear-in',
      });
      this.setData({
        animationData8: animation.right("-25rpx").step().export()
      });
    }.bind(this), 2500)
  },
  bottomTobottom: function () {
    setTimeout(function () {
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'linear-in',
      });
      this.setData({
        animationData9: animation.bottom("1rpx").step().export()
      });
    }.bind(this), 2500)
  },
  leixingTopto: function () {
    setTimeout(
      function () {
        var animation = wx.createAnimation({
          duration: 500,
          timingFunction: 'linear-in',
        });
        this.setData({
          animationData10: animation.top("12%").step().export()
        });
      }.bind(this), 2500)
  },
  leixingTopto: function () {
    setTimeout(
      function () {
        var animation = wx.createAnimation({
          duration: 1000,
          timingFunction: 'linear-in',
        });
        this.setData({
          animationData10: animation.top("12%").step().top("15%").opacity(0).step().top("-7%").step().export()
        });
      }.bind(this), 2500)
  },
  topicTobig: function () {
    setTimeout(
      function () {
        var animation = wx.createAnimation({
          duration: 1000,
          timingFunction: 'linear-in',
        });
        this.setData({
          animationData11: animation.translateX("-49.5%").translateY("-42%").top("42%").scale(22).step().scale(20).step({ duration: 500 }).scale(0).opacity(0).step({ duration: 500 }).export(),
        });
      }.bind(this), 2500)
  },
  topBg: function () {
    setTimeout(function () {
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'linear-in',
      });
      this.setData({
        animationData12: animation.top("0%").left("22%").width("432rpx").height("205rpx").step().width("402rpx").height("175rpx").step().export()
      });
    }.bind(this), 3500)
  },
  topBgTime: function () {
    setTimeout(function () {
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'linear-in',
      });
      this.setData({
        animationData13: animation.scale(1.5).step().scale(1).step().export()
      });
    }.bind(this), 3500)
  },
  topic_title: function () {
    setTimeout(function () {
      var animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'linear-in',
      });
      this.setData({
        animationData14: animation.width("70%").step().opacity(1).step().export()
      });
    }.bind(this), 4200)
  },

  pregress_title: function () {
    setTimeout(function () {
      var animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'linear-in',
      });
      this.setData({
        animationData15: animation.left("40rpx").step().export()
      });
    }.bind(this), 4200)
  },

  pregress_title_right: function () {
    setTimeout(function () {
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'linear-in',
      });
      this.setData({
        animationData16: animation.right("40rpx").step().export()
      });
    }.bind(this), 4200)
  },

  pregress_title_text: function () {
    setTimeout(function () {
      var animation = wx.createAnimation({
        duration: 600,
        timingFunction: 'linear-in',
      });
      this.setData({
        animationData17: animation.scale(1.1).step().scale(1).step().export()
      });
    }.bind(this), 4200)
  },
  changeColor: function () {
    var bgColor = this.data.pageBackgroundColor == 'white' ? '#69bf28' : 'white';
    
    this.setData({
      pageBackgroundColor: bgColor,
      
    });
  }
})