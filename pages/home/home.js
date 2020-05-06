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
  }
  
})