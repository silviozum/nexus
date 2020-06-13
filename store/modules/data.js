const state ={
    order: {
      date:'',
      time:'',
      guestCreateDtos:[{
        id:0,
        services:[],
        productIdDtos:[],
        profileCreateDto:{
          lengthHair:'',
          hairType:'',
          skinType:''
        }
      }]
    }
  }
  
  const mutations = {
    add(state, payload){
      const idList = state.order.guestCreateDtos.map(function(item){
        return item.id
      })
      if(idList.indexOf(payload) < 0){
        for(let i = state.order.guestCreateDtos.length; i<=payload; i++ ){
          if( i > 0){
            state.order.guestCreateDtos.push({        
              id: i,
              productIdDtos:[],
              services:[],
              profileCreateDto:{
                lengthHair:'',
                hairType:'',
                skinType:''
              }
            })
          }
        }
      }
    },

    setType(state, payload){
      state.order.guestCreateDtos.map(function(item){
        if(item.id === payload.id){
         return item.services = payload.services
        }
      })
    },

    setDetailLengthHair(state, payload){
      state.order.guestCreateDtos[payload.id].profileCreateDto.lengthHair = payload.value
    }, 
    productId(state, payload){
      state.order.guestCreateDtos[payload.id].profileCreateDto.productIdDtos = payload.list
    }, 
    setDetailsHairType(state, payload){
      state.order.guestCreateDtos[payload.id].profileCreateDto.hairType = payload.value
    },

    setDetailsSkinType(state, payload){
      state.order.guestCreateDtos[payload.id].profileCreateDto.skinType = payload.value
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