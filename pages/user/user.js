// pages/user.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    top: [{
        name: 'inform',
        path: '../img/user/inform.svg'
      },
      {
        name: 'set',
        path: '../img/user/set.svg'
      }
    ],
    city: [{
        num: '3',
        text: '点亮城市',
      }, {
        num: '1',
        text: '打卡点',
      },
      {
        num: '24.1',
        text: '出行里程'
      },
    ],
    middle: [{
      name: '全部订单',
      path: '../img/user/indent.svg'
    }, {
      name: '待付款',
      path: '../img/user/pay.svg'
    }, {
      name: '带使用',
      path: '../img/user/use.svg'
    }, {
      name: '退款',
      path: '../img/user/unpay.svg'
    }, {
      name: '待评价',
      path: '../img/user/apparise.svg'
    }, {
      name: '待处理',
      path: '../img/user/wait.svg'
    }, {
      name: '处理中',
      path: '../img/user/dispose.svg'
    }, {
      name: '完成',
      path: '../img/user/complete.svg'
    }],
    bottom: [{
      name: 'home',
      path: '../img/public/home.svg'
    }, {
      name: 'vip',
      path: '../img/public/vip.svg'
    }, {
      name: 'user',
      path: '../img/public/user.svg'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})