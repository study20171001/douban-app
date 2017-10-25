var sour = require('./test.json')
var fs = require('fs')

var info = {
  "id":"7890",
  "title": "jQuery3D轮播效果",
  "summary": "插件描述：jQuery多个3D环绕滚动效果",
  "type": "所属分类：媒体-幻灯片和轮播图",
  "url": "test",
  "demo": "http://www.jq22.com/demo/jqueryGdlbt201710242324",
  "image": "http://assets.jq22.com/plugin/2017-10-24-23-23-56.png",
  "compatible": {
    "ie": "ie兼容9",
    "all": "http://www.jq22.com/img/9.png"
  },
  "time": "201710242324"
}

sour[111] = info

var dest = JSON.stringify(sour)
fs.writeFile('./test.json',dest)
