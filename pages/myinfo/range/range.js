// pages/myinfo/range/range.js
Page({
  data:{
    cardViewContent:[
      {
        titleText: '镀锌类产品',
        titleTag: '丰泰集团', 
        img: 'https://ideacom.cn/public/wxsrc/gangcai/images/range/e1.jpg'
      },
      {
        titleText: '热轧类产品',
        titleTag: '丰泰集团',
        img: 'https://ideacom.cn/public/wxsrc/gangcai/images/range/e2.jpg'
      },
      {
        titleText: '冷轧类产品',
        titleTag: '丰泰集团',
        img: 'https://ideacom.cn/public/wxsrc/gangcai/images/range/e3.jpg'
      },
      {
        titleText: '冷轧硅钢类产品',
        titleTag: '丰泰集团',
        img: 'https://ideacom.cn/public/wxsrc/gangcai/images/range/e4.jpg'
      },
      {
        titleText: '涂彩类产品',
        titleTag: '丰泰集团',
        img: 'https://ideacom.cn/public/wxsrc/gangcai/images/range/e5.jpg'
      },
      {
        titleText: '线材类产品',
        titleTag: '丰泰集团',
        img: 'https://ideacom.cn/public/wxsrc/gangcai/images/range/e6.jpg'
      }
    ],
    bottomTab:['镀锌','热轧','冷轧','硅钢','涂彩','线材'],
    activeTab: 0
  },
  previewImg:function(e){
    wx.previewImage({
      current:this.data.qrcodeImg,
      urls: this.data.qrcodeImg
    })
  },
  rcbBottomTab:function(e){
    this.setData({
      activeTab:e.target.dataset.index
    })
    //console.log(e)
    //console.log(this.data.activeTab)
  },
  swiperChange:function(e){
    var activeTabIndex = e.detail.current
      this.setData({
        activeTab: activeTabIndex
      })
      //console.log(this.data.activeTab)
      //console.log(e)
    
  }
  
})