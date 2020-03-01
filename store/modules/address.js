const state = {
    cep:'',
    logadouro:'',
    numero:'',
    complemento:'',
    bairro:'',
    localidade:'',
    uf:'',
  }
  
  const mutations = {
    setAdress (state, payload) {
        state = payload
    },
    setCep (state, payload) {
        state.cep = payload
    }
  }
  
  const getters = {
    getAddress: state => state
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    getters
  }