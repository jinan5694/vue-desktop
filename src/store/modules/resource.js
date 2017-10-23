export default {
  state: {
    resource: []
  },
  mutations: {
    setResource (state, resource) {
      state.resource = resource
    }
  },
  actions: {},
  getters: {
    getResource: state => {
      return state.resource
    }
  }
}
