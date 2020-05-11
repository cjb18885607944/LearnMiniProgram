// getApp()获取App(产生的示例对象
const app = getApp()
console.log(app.globalData.name)

Page({
  data:{
    name:'cuishushu',
    students:[
      {id:1,name:'kobe',age:22},
      {id:2,name:'james',age:28},
      {id:3,name:'curry',age:32},
      {id:4,name:'why',age:18}
    ],
    counter:0
  },
  increment(){
    this.setData({
      counter:this.data.counter+1
    })
    console.log(this.data.counter);
    
  },
  decrement(){
    this.setData({
      counter:this.data.counter-1
    })
    console.log(this.data.counter);
  },
  handleGetUserInfo(event){
    console.log('获取用户信息...')
    console.log(event)
  },

  // 生命周期函数
  onLoad(){
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success(res){
        console.log(res);
      }
    })
  },
  onShow(){
    console.log('onShow')
  },
  onReady(){
    console.log('onReady');
  },

  // 监听页面滚动
  onPageScroll(obj){
    // console.log(obj)
  },
  // 监听页面滚动到底部
  onReachBottom(){
    console.log('到底了')
  },
  // 下拉刷新
  onPullDownRefresh(){
    console.log('下拉刷新');
    
  }
  
})