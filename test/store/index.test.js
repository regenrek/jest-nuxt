import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
const { beforeAll, describe } = require('@jest/globals')

describe('store/index', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let NuxtStore
  let store

  beforeAll(async () => {
    // note the store will mutate across tests
    const storePath = `${process.env.buildDir}/store.js`
    NuxtStore = await import(storePath)
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
  })

  describe('Store testing', () => {
    test('Axios Dogs request', async () => {
      // expect(async () => {
      //   await store.dispatch('fetchDogs')
      // }).toThrow(TypeError)
      const dogs = await store.dispatch('fetchDogs')
      expect(dogs).not.toBe(false)
      expect(typeof dogs).toBe('object')
    })
  })
})
