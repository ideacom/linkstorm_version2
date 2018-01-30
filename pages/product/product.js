// pages/deatail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allUnitprice: '选择产品',
    allTheGoods: '全部商品',
    steelFlag: '扁钢',
    galvanizedPipe: '镀锌管',
    angleIron: '角钢',
    ordinaryHotRolledPlate: '普通热轧板',
    hShapedSteel: 'H型钢',
    angleIron: '角钢',
    ordinaryHotRolledPlate: '普通热轧板',
    hShapedSteel: 'H型钢',
    buildingRoundSteel: '建筑圆钢',
    theMaterialOfSteel: '材质/钢质',
    specificationsOfTheWarehouse: '规格/仓库',
    price: '价格',
    hShpaeMetal: 'H型钢-H型钢',
    steelList: [
      {
        textture: 'q435',
        specification: '500*150',
        steel: '日照',
        warehouse: '迈辉仓',
        way: '电议',
      },
      {
        textture: 'q435',
        specification: '500*150',
        steel: '日照',
        warehouse: '迈辉仓',
        way: '电议',
      },
      {
        textture: 'q435',
        specification: '500*150',
        steel: '日照',
        warehouse: '迈辉仓',
        way: '电议',
      },
      {
        textture: 'q435',
        specification: '500*150',
        steel: '日照',
        warehouse: '迈辉仓',
        way: '电议',
      },
      {
        textture: 'q435',
        specification: '500*150',
        steel: '日照',
        warehouse: '迈辉仓',
        way: '电议',
      },
      {
        textture: 'q435',
        specification: '500*150',
        steel: '日照',
        warehouse: '迈辉仓',
        way: '电议',
      },
      {
        textture: 'q435',
        specification: '500*150',
        steel: '日照',
        warehouse: '迈辉仓',
        way: '电议',
      },
      {
        textture: 'q435',
        specification: '500*150',
        steel: '日照',
        warehouse: '迈辉仓',
        way: '电议',
      },
      {
        textture: 'q435',
        specification: '500*150',
        steel: '日照',
        warehouse: '迈辉仓',
        way: '电议',
      },
    ],

    roate: false,
    displayhidden: true,
    color1: '#333',
    display: true,
  },
  DisplayHidden: function () {
    var displayhidden = this.data.displayhidden;
    if (displayhidden == true) {
      this.setData({
        rotate: true,
        displayhidden: false,
        display: false,
      })
    } else {
      this.setData({
        rotate: false,
        displayhidden: true,
        display: true,
      })
    }

  },
  all: function () {
    this.setData({
      color1: '#208DD7',
      color2: '#333',
      color3: '#333',
      color4: '#333',
      color5: '#333',
      color6: '#333',
      color7: '#333',
      color8: '#333',
      color9: '#333',
      color10: '#333',
      color11: '#333',
      color12: '#333',
      color13: '#333',
    })
  },
  b_steel: function () {
    this.setData({
      color1: '#333',
      color2: '#208DD7',
      color3: '#333',
      color4: '#333',
      color5: '#333',
      color6: '#333',
      color7: '#333',
      color8: '#333',
      color9: '#333',
      color10: '#333',
      color11: '#333',
      color12: '#333',
      color13: '#333',
    })
  },
  d_steel: function () {
    this.setData({
      color1: '#333',
      color2: '#333',
      color3: '#208DD7',
      color4: '#333',
      color5: '#333',
      color6: '#333',
      color7: '#333',
      color8: '#333',
      color9: '#333',
      color10: '#333',
      color11: '#333',
      color12: '#333',
      color13: '#333',
    })
  },
  j_steel: function () {
    this.setData({
      color1: '#333',
      color2: '#333',
      color3: '#333',
      color4: '#208DD7',
      color5: '#333',
      color6: '#333',
      color7: '#333',
      color8: '#333',
      color9: '#333',
      color10: '#333',
      color11: '#333',
      color12: '#333',
      color13: '#333',
    })
  },
  p_steel: function () {
    this.setData({
      color1: '#333',
      color2: '#333',
      color3: '#333',
      color4: '#333',
      color5: '#208DD7',
      color6: '#333',
      color7: '#333',
      color8: '#333',
      color9: '#333',
      color10: '#333',
      color11: '#333',
      color12: '#333',
      color13: '#333',
    })
  },
  h_steel: function () {
    this.setData({
      color1: '#333',
      color2: '#333',
      color3: '#333',
      color4: '#333',
      color5: '#333',
      color6: '#208DD7',
      color7: '#333',
      color8: '#333',
      color9: '#333',
      color10: '#333',
      color11: '#333',
      color12: '#333',
      color13: '#333',
    })
  },
  jz_steel: function () {
    this.setData({
      color1: '#333',
      color2: '#333',
      color3: '#333',
      color4: '#333',
      color5: '#333',
      color6: '#333',
      color7: '#208DD7',
      color8: '#333',
      color9: '#333',
      color10: '#333',
      color11: '#333',
      color12: '#333',
      color13: '#333',
    })

  },
  b_steels: function () {
    this.setData({
      color1: '#333',
      color2: '#333',
      color3: '#333',
      color4: '#333',
      color5: '#333',
      color6: '#333',
      color7: '#333',
      color8: '#208DD7',
      color9: '#333',
      color10: '#333',
      color11: '#333',
      color12: '#333',
      color13: '#333',
    })
  },
  d_steels: function () {
    this.setData({
      color1: '#333',
      color2: '#333',
      color3: '#333',
      color4: '#333',
      color5: '#333',
      color6: '#333',
      color7: '#333',
      color8: '#333',
      color9: '#208DD7',
      color10: '#333',
      color11: '#333',
      color12: '#333',
      color13: '#333',
    })
  },
  j_steels: function () {
    this.setData({
      color1: '#333',
      color2: '#333',
      color3: '#333',
      color4: '#333',
      color5: '#333',
      color6: '#333',
      color7: '#333',
      color8: '#333',
      color9: '#333',
      color10: '#208DD7',
      color11: '#333',
      color12: '#333',
      color13: '#333',
    })
  },
  p_steels: function () {
    this.setData({
      color1: '#333',
      color2: '#333',
      color3: '#333',
      color4: '#333',
      color5: '#333',
      color6: '#333',
      color7: '#333',
      color8: '#333',
      color9: '#333',
      color10: '#333',
      color11: '#208DD7',
      color12: '#333',
      color13: '#333',
    })
  },
  h_steels: function () {
    this.setData({
      color1: '#333',
      color2: '#333',
      color3: '#333',
      color4: '#333',
      color5: '#333',
      color6: '#333',
      color7: '#333',
      color8: '#333',
      color9: '#333',
      color10: '#333',
      color11: '#333',
      color12: '#208DD7',
      color13: '#333',
    })
  },
  jz_steels: function () {
    this.setData({
      color1: '#333',
      color2: '#333',
      color3: '#333',
      color4: '#333',
      color5: '#333',
      color6: '#333',
      color7: '#333',
      color8: '#333',
      color9: '#333',
      color10: '#333',
      color11: '#333',
      color12: '#333',
      color13: '#208DD7',
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
    return {
      title: 'Linkstorm物联科技有限公司小程序定制',
      desc: '最具人气的小程序开发!',

    }

  }


})