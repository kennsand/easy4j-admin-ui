'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _vueTypes = require('ant-design-vue/es/_util/vue-types')

var _vueTypes2 = _interopRequireDefault(_vueTypes)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { 'default': obj } }

var ProConfigProviderProps = {
  i18nRender: _vueTypes2['default'].oneOfType([_vueTypes2['default'].func, _vueTypes2['default'].bool]).def(false),
  contentWidth: _vueTypes2['default'].oneOf(['Fluid', 'Fixed']).def('Fluid'),
  breadcrumbRender: _vueTypes2['default'].func
}

var ConfigProvider = {
  name: 'ProConfigProvider',
  props: ProConfigProviderProps,
  provide: function provide () {
    var _self = this
    return {
      locale: _self.$props.i18nRender,
      contentWidth: _self.$props.contentWidth,
      breadcrumbRender: _self.$props.breadcrumbRender
    }
  },
  render: function render () {
    var $scopedSlots = this.$scopedSlots

    var children = this.children || $scopedSlots['default']
    return children()
  }
}

exports['default'] = ConfigProvider
