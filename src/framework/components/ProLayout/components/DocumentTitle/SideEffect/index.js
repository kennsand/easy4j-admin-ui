'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck')

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { 'default': obj } }

/* eslint-disable */
var SideEffect = function SideEffect(_ref) {
  var propsToState = _ref.propsToState,
      handleStateChange = _ref.handleStateChange;
  (0, _classCallCheck3['default'])(this, SideEffect);

  if (typeof propsToState !== 'function') {
    throw new Error('Expected propsToState to be a function.');
  }
  if (typeof handleStateChange !== 'function') {
    throw new Error('Expected handleStateChange to be a function.');
  }
  this.options = {
    propsToState: propsToState,
    handleStateChange: handleStateChange
  };
};

exports['default'] = SideEffect;