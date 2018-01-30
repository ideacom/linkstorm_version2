// pages/index/station/station.js
Page({
  data: {
    formHolderText:'请选择查询的城市',
    serviceHolderText:'客服中心',
    region: [
      '上海市',
      '宝山区',
      '宝山区'
      ],
    arrow:'../images/arrow.png',
    numImg:'../images/num.png',
    itemsNumber:[
      '1',
      '2'
    ],
    customItem: '全部',
    itemsName: [
      '上海市宝山区松南镇丰泰会议中心',
      '上海市普陀区长寿路沙田大厦丰泰常驻办事处'
      ],
    place: [
      '上海市宝山区松南镇丰泰会议中心',
      '上海市普陀区长寿路587号沙田大厦丰泰常驻办事处'
      ],
    time: [
      '09:00-17:30',
      '09:00-17:30'
      ],
    phone: [
      '021-62000000',
      '021-62000001'
      ],
    map:'地图导航'
  },
  bindRegionChange:function(e){
    this.setData({
      region:e.detail.value
    })
  },
  makeMapDisplay1:function(){
    wx.openLocation({
      latitude: 31.31,
      longitude: 121.40,
      name: '丰泰会议中心',
      address: '上海市宝山区松南镇丰泰会议中心',
    })
  },
  makePhoneCall1:function(){
    wx.makePhoneCall({
      phoneNumber: '021-62000000',
    })
  },
  makeMapDisplay2:function () {
    wx.openLocation({
      latitude: 31.24,
      longitude: 121.43,
      name: '丰泰常驻办事处',
      address: '上海市普陀区长寿路587号沙田大厦丰泰常驻办事处',
    })
  },
  makePhoneCall2:function () {
    wx.makePhoneCall({
      phoneNumber: '021-62000001',
    })
  },
  onLoad: function (options) {
    var b = options.id
    console.log(b)
  },
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