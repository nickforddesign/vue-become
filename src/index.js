import makeMixin from './mixin'

export default class VueBecome {
  static install(Vue, options) {
    Vue.mixin(makeMixin(Vue))
  }
}
