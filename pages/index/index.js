  function randColor() {
    var letter = "0123456789ABCDEF";
    var color = [];
    var c = "#";
    for (var i = 0; i < 6; i++) {
      c = c + letter[Math.floor(Math.random() * 16)]
    }
    color.push(c);
    return color[0];
  }


  function randomColorList() {
    let list = []
    for (let i of new Array(10)) {
      list.push(randColor())
    }
    return list
  }
  // index.js
  Page({
    data: {
      fetures_name: [{
          ico: '../img/index/car.png',
          name: '驾车'
        },
        {
          ico: '../img/index/bike.svg',
          name: '骑行'
        },
        {
          ico: '../img/index/bus.png',
          name: '公交'
        },
        {
          ico: '../img/index/people.png',
          name: '步行'
        },
        {
          ico: '../img/index/1.png',
          name: '打车'
        },
        {
          ico: '../img/index/ac.png',
          name: '预订'
        },
        {
          ico: '../img/index/catten.png',
          name: '餐厅'
        },
        {
          ico: '../img/index/more.png',
          name: '更多'
        },
      ],
      middle_navigation_name: [{
          name: '推荐'
        },
        {
          name: '美食'
        },
        {
          name: '景点'
        },
        {
          name: '更多'
        },
      ],
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
      latitude: 39.909088,
      longitude: 116.397643,
      color_list: randomColorList(),
      data_list: [100, 140, 120, 150, 158, 130, 120],
      flag: false
    },

    onLoad(param) {
      const length = this.data.data_list.length
      if (length / 2 === 1) {
        this.data.data_list.push(this.data.data_list[length - 1])
      }
    },


  })