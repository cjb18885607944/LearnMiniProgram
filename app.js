App({
  onLaunch (options) {
    // Do something initial when launch.
    wx.getUserInfo({
      complete: (res) => {console.log(res)},
    })
  },
  onShow (options) {
    // Do something when show.
  },
  onHide () {
    // Do something when hide.
  },
  onError (msg) {
    console.log(msg)
  }
})