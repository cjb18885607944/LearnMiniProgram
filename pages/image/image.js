// pages/image/image.js
Page({
  data: {

  },
  chooseImg(){
    wx.chooseImage({
      complete: (res) => {
        console.log(res)
      },
      success:(res) => {
        console.log(res)
      }
    })
  }
})