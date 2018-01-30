
Page({
  data: {
    headerImg: 'http://ideacom.cn/public/wxsrc/gangcai/images/contact.jpg',
    itemsName: [
      '中山市石岐区客服中心'
    ],
    place: [
      '中山市石岐区龙腾路大信溢彩荟9楼910卡'
    ],
    time: [
      '09:00-17:30'
    ],
    phone: [
      '0760-89988180'
    ]
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  makeMapDisplay: function () {
    wx.openLocation({
      latitude: 22.53,
      longitude: 113.39,
      name: '物联科技有限公司',
      address: '石岐区龙腾路溢彩荟9-910卡',
    })
  },
  makePhoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '17666474831',
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