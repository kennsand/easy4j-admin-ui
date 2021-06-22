'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.updateColorWeak = exports.updateTheme = exports.BasicLayoutProps = exports.DocumentTitle = exports.SettingDrawer = exports.BlockLayout = exports.SiderMenuWrapper = exports.PageHeaderWrapper = exports.GlobalFooter = undefined

var _BasicLayout = require('./BasicLayout')

var _BasicLayout2 = _interopRequireDefault(_BasicLayout)

var _BlockLayout = require('./BlockLayout')

var _BlockLayout2 = _interopRequireDefault(_BlockLayout)

var _PageHeaderWrapper = require('./components/PageHeaderWrapper')

var _PageHeaderWrapper2 = _interopRequireDefault(_PageHeaderWrapper)

var _SiderMenu = require('./components/SiderMenu')

var _SiderMenu2 = _interopRequireDefault(_SiderMenu)

var _GlobalFooter = require('./components/GlobalFooter')

var _GlobalFooter2 = _interopRequireDefault(_GlobalFooter)

var _SettingDrawer = require('./components/SettingDrawer')

var _SettingDrawer2 = _interopRequireDefault(_SettingDrawer)

var _DocumentTitle = require('./components/DocumentTitle')

var _DocumentTitle2 = _interopRequireDefault(_DocumentTitle)

var _dynamicTheme = require('./utils/dynamicTheme')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { 'default': obj } }

exports.GlobalFooter = _GlobalFooter2['default']
exports.PageHeaderWrapper = _PageHeaderWrapper2['default']
exports.SiderMenuWrapper = _SiderMenu2['default']
exports.BlockLayout = _BlockLayout2['default']
exports.SettingDrawer = _SettingDrawer2['default']
exports.DocumentTitle = _DocumentTitle2['default']
exports.BasicLayoutProps = _BasicLayout.BasicLayoutProps
exports.updateTheme = _dynamicTheme.updateTheme
exports.updateColorWeak = _dynamicTheme.updateColorWeak
exports['default'] = _BasicLayout2['default']
