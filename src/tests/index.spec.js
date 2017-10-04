import VueBecome from '../index'
import Vue from 'vue'
import { sleep } from '../utils'

Vue.use(VueBecome)

const app = new Vue({
  data() {
    return {
      thing: false
    }
  }
})

describe('vue-become', () => {
  it('should subscribe to a data property, with no args', () => {
    expect.assertions(1)
    sleep(100)
      .then(() => {
        app.thing = true
      })
    return app.$become('thing')
      .then(value => {
        expect(value)
          .toBe(true)
      })
  })

  it('should subscribe to a data property, with a value passed to watcher', () => {
    expect.assertions(1)
    sleep(100)
      .then(() => {
        app.thing = 'test'
      })
    return app.$become('thing', 'test')
      .then(value => {
        expect(value)
          .toBe(true)
      })
  })

  it('should subscribe to a data property, with resolveIfDefined: true', () => {
    expect.assertions(1)
    sleep(100)
      .then(() => {
        app.thing = 'test'
      })
    return app.$become('thing', 'test', {
      resolveIfDefined: true
    })
      .then(value => {
        expect(value)
          .toBe(true)
      })
  })
})
