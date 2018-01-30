// pages/myinfo/wxopen/wxopen.js
Page({

  data: {
    qrcodeImg: [
      'https://ideacom.cn/public/wxsrc/gangcai/images/qrcode.jpg'
    ]
  },

  previewImg: function (e) {
    wx.previewImage({
      current: this.data.qrcodeImg,
      urls: this.data.qrcodeImg
    })
  }

})