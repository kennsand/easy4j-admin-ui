'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

require('./index.less')

var _vueTypes = require('ant-design-vue/es/_util/vue-types')

var _vueTypes2 = _interopRequireDefault(_vueTypes)

var _propsUtil = require('ant-design-vue/lib/_util/props-util')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { 'default': obj } }

var GlobalFooterProps = {
  links: _vueTypes2['default'].array,
  copyright: _vueTypes2['default'].any
}

var GlobalFooter = {
  name: 'GlobalFooter',
  props: GlobalFooterProps,
  render: function render () {
    var h = arguments[0]

    var copyright = (0, _propsUtil.getComponentFromProp)(this, 'copyright')
    var links = (0, _propsUtil.getComponentFromProp)(this, 'links')
    var linksType = (0, _propsUtil.hasProp)(links)

    return h(
      'footer',
      { 'class': 'ant-pro-global-footer' },
      [h(
        'div',
        { 'class': 'ant-pro-global-footer-links' },
        [linksType && links.map(function (link) {
          return h(
            'a',
            {
              key: link.key,
              attrs: { title: link.key,
                target: link.blankTarget ? '_blank' : '_self',
                href: link.href
              }
            },
            [link.title]
          )
        }) || links]
      ), copyright && h(
        'div',
        { 'class': 'ant-pro-global-footer-copyright' },
        [copyright]
      )]
    )
  }
}

exports['default'] = GlobalFooter
