'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports['default'] = {
  name: 'VueFragment',
  functional: true,
  render: function render (h, ctx) {
    return ctx.children.length > 1 ? h('div', {}, ctx.children) : ctx.children
  }
}
