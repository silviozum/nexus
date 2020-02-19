const state ={
    order: {
      date:'',
      time:'',
      clients:[{
        id:0,
        services:[],
        details:{
          lengthHair:'',
          typeHair:'',
          typeSkin:''
        }
      }]
    }
  }
  
  const mutations = {
    add(state, payload){
      const idList = state.order.clients.map(function(item){
        return item.id
      })
      if(idList.indexOf(payload) < 0){
        for(let i = state.order.clients.length; i<=payload; i++ ){
          if( i > 0){
            state.order.clients.push({        
              id: i,
              services:[],
              details:{
                lengthHair:'',
                typeHair:'',
                typeSkin:''
              }
            })
          }
        }
      } else {
        if( payload > 0){
          state.order.clients = state.order.clients.filter(function(item,index){
            if(index < payload + 1){
              return item
            }
          })
        }else{
          state.order.clients = state.order.clients.filter(function(item,index){
            if(index  === 0){
              return item
            }
          })
        }
      }
    },

    setType(state, payload){
      state.order.clients.map(function(item){
        if(item.id === payload.id){
         return item.services = payload.services
        }
      })
    },

    setDetailLengthHair(state, payload){
      state.order.clients[payload.id].details.lengthHair = payload.value
    }, 

    setDetailsHairType(state, payload){
      state.order.clients[payload.id].details.typeHair = payload.value
    },

    setDetailsColorType(state, payload){
      state.order.clients[payload.id].details.typeSkin = payload.value
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