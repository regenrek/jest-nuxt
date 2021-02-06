const types = {
  SET_DOGS: 'SET_DOGS'
}

const actions = {
  nuxtServerInit({ dispatch }, ctx) {
    // try {
    //   // this.$cookies.get('my-cookie')
    //   if (!ctx.$cookies.get(`my-cookie`)) {
    //     ctx.$cookies.set('my-cookie', 'cookie-value', {
    //       path: '/',
    //       maxAge: 60 * 60 * 24 * 7
    //     })
    //   }
    // } catch (e) {
    //   console.error('Exception', e)
    // }
  },
  async fetchDogs({ commit }) {
    try {
      const dogs = await this.$axios.$get('https://dog.ceo/api/breeds/list/all')
      //console.log(history)
      // do commits whatever...
      commit(types.SET_DOGS, dogs)
    } catch (e) {
      commit(types.SET_DOGS, false)
      console.error(e)
      throw new TypeError('API error' + e.message)
    }
  }
}

const mutations = {
  [types.SET_DOGS](state, payload) {
    state.dogs = payload
  }
}

const state = () => ({
  dogs: false
})

export default {
  state,
  actions,
  mutations
}
