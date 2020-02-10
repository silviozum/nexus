const state ={
    count: 1,
    typeSelected:[],
    order: {
      date:'',
      time:'',
      clients:[{
        id:1,
      }]
    }
  }
  
  const mutations = {
    setClients (state, payload) {
      state.order.clients[state.count - 1] = payload
    },
    add(state, payload){
      state.order.clients.push(payload)
      state.count = state.count + 1
    },
    setTypeSelected(state, payload){
      if(payload.insert){
        state.typeSelected.push(payload.type)
      }else{
        if(state.typeSelected.length > 0){
          state.typeSelected.map(function(item, index){
            if(item === payload.type){
              state.typeSelected.splice(index, 1)
            }
          })
        }
      }
    },
    setDetail(state, payload){
      let found = false
      state.order.clients.map(q => {
        if (q.id === payload.id) {
          found = true
          return Object.assign({}, q, payload)
        }
      })
      if (!found) {
        state.order.clients.push(payload)
      }
      console.log(state.order.clients)
    }
  }
  
  const getters = {
    getData: state => state
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    getters
  }