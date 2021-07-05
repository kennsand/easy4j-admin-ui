'use strict'
/* eslint-disable */
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.updateColorWeak = exports.updateTheme = exports.themeColor = undefined

var _client = require('webpack-theme-color-replacer/client')

var _client2 = _interopRequireDefault(_client)

var _generate = require('@ant-design/colors/lib/generate')

var _generate2 = _interopRequireDefault(_generate)

var _antDesignVue = require('ant-design-vue')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { 'default': obj } }

var themeColor = exports.themeColor = {
  getAntdSerials: function getAntdSerials (color) {
    // 淡化（即less的tint）
    var lightens = new Array(9).fill().map(function (t, i) {
      return _client2['default'].varyColor.lighten(color, i / 10)
    })
    // colorPalette 变换得到颜色值
    var colorPalettes = (0, _generate2['default'])(color)
    var rgb = _client2['default'].varyColor.toNum3(color.replace('#', '')).join(',')
    return lightens.concat(colorPalettes).concat(rgb)
  },
  changeColor: function changeColor (newColor) {
    var options = {
      newColors: this.getAntdSerials(newColor), // new colors array, one-to-one corresponde with `matchColors`
      changeUrl: function changeUrl (cssUrl) {
        return '/' + cssUrl // while router is not `hash` mode, it needs absolute path
      }
    }
    return _client2['default'].changer.changeColor(options, Promise)
  }
}

var updateTheme = exports.updateTheme = function updateTheme (newPrimaryColor) {
  var hideMessage = _antDesignVue.message.loading('正在切换主题', 0)
  themeColor.changeColor(newPrimaryColor).then(function (r) {
    hideMessage()
  })
}

var updateColorWeak = exports.updateColorWeak = function updateColorWeak (colorWeak) {
  // document.body.className = colorWeak ? 'colorWeak' : '';
  var app = document.body.querySelector('#app')
  colorWeak ? app.classList.add('colorWeak') : app.classList.remove('colorWeak')
}
