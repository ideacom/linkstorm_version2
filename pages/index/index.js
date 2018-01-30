// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:[
      //图片宽高比例额定：46：28
      'http://ideacom.cn/public/wxsrc/gangcai/images/pr-he-bg1.jpg',
      'http://ideacom.cn/public/wxsrc/gangcai/images/pr-he-bg2.jpg',
      'http://ideacom.cn/public/wxsrc/gangcai/images/pr-he-bg3.jpg'
    ],
    tagImg:[
      'images/localtion.png',
      'images/search.png',
      'images/tools.png',
      'images/safe.png',
      'images/rmb.png',
      'images/reserve.png'
    ],
    tagText:[
      '服务网点',
      '设备展示',
      '企业简介'
    ],
    logo:[
      "images/phone3.png",
      "images/local.png"
    ],
    itemsText:[
      "丰泰集团·（上海）有限公司",
      "一键导航"
    ],
    btnText:[
      "立即前往",
      "欢迎咨询"
    ],
    indexNewsLeft:[
      {
        newsTitle:'角钢的热处理技术',
        newsDate:'18/01/28'
      },
      {
        newsTitle: '声测管选型的基本方法',
        newsDate: '18/01/28'
      },
      {
        newsTitle: '补库周期启动 螺纹钢有望迎来涨势',
        newsDate: '18/01/27'
      },
      {
        newsTitle: '本周型材价格全面走跌',
        newsDate: '18/01/27'
      },
      {
        newsTitle: '方管市场的出其不意着实让当下的所有···',
        newsDate: '18/01/27'
      },
    ],
    indexNewsRight: [
      {
        newsTitle: '预计短期重庆镀锌管市价将继续观望···',
        newsDate: '18/01/28'
      },
      {
        newsTitle: '唐山工字钢、槽钢价格小幅上涨',
        newsDate: '18/01/28'
      },
      {
        newsTitle: '如何选择好的声测管批发厂家',
        newsDate: '18/01/27'
      },
      {
        newsTitle: '库存下降减缓，钢价高位反复，磨人···',
        newsDate: '18/01/27'
      },
      {
        newsTitle: '圆钢与螺纹钢的区别',
        newsDate: '18/01/27'
      },
    ],
    indexNewsTitle: ['钢铁动态','钢铁资讯'],
    activedIndex:0
  },
  imgTap: function () {
    wx.navigateTo({
      url: 'alternateDetil/alternateDetil',
    })
  },
  makeMapDisplay: function () {
    wx.openLocation({
      latitude: 31.24,
      longitude: 121.43,
      name: '丰泰常驻办事处',
      address: '上海市普陀区长寿路587号沙田大厦丰泰常驻办事处',
    })
  },
  makePhoneCall:function(){
    wx.makePhoneCall({
      phoneNumber: '021-62000000',
    })
  },
  tag1:function(){
    wx.navigateTo({
      url: 'station/station',
    })
  },
  tag2: function () {
    wx.navigateTo({
      url: 'peijian/peijian',
    })
  },
  tag3: function () {
    wx.navigateTo({
      url: '../myinfo/range/range',
    })
  },
  makeNewsContentChange:function(e){
    var tabIndex = e.target.dataset.index
    this.setData({
      activedIndex:tabIndex
    })
  },
  makeNewsTabchange:function(e){
    var selectedIndex = e.detail.current
    this.setData({
      activedIndex:selectedIndex
    })
  },
  makeNewsDetilDisplay:function(e){
    var newsid = e.currentTarget.dataset.newsid
    wx.navigateTo({
      url: 'newsDetil/newsDetil?id=' + newsid,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})