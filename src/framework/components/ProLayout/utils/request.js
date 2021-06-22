'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.extend = exports.request = exports.BASE_URL = undefined

var _extends2 = require('babel-runtime/helpers/extends')

var _extends3 = _interopRequireDefault(_extends2)

var _umiRequest = require('umi-request')

var _umiRequest2 = _interopRequireDefault(_umiRequest)

var _antDesignVue = require('ant-design-vue')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { 'default': obj } }

var codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}

var errorHandler = function errorHandler (error) {
  var _error$response = error.response
      var response = _error$response === undefined ? {} : _error$response

  var errortext = codeMessage[response.status] || response.statusText
  var status = response.status
      var url = response.url

  _antDesignVue.notification.error({
    message: '\u8BF7\u6C42\u9519\u8BEF ' + status + ': ' + url,
    description: errortext
  })
}

var BASE_URL = exports.BASE_URL = process.env.VUE_APP_API_URL || '/api/v1'

var customRequest = (0, _umiRequest.extend)({
  prefix: BASE_URL,
  timeout: 1000,
  errorHandler: errorHandler
})

// request 拦截器
customRequest.interceptors.request.use(function (url, options) {
  return {
    url: url + '&interceptors=yes',
    options: (0, _extends3['default'])({}, options, { interceptors: true })
  }
})

// response 拦截器
customRequest.interceptors.response.use(function (response, options) {
  response.headers.append('interceptors', 'yes yo')
  return response
})

exports.request = _umiRequest2['default']
exports.extend = _umiRequest.extend
exports['default'] = customRequest
