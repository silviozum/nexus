<template>
  <div>
    <div> 
    <div class="select-qty" v-for="(o, index) in details" v-bind:key="index" v-if="selectedServices.typeSelected[0] === o.type || selectedServices.typeSelected[1] === o.type ">
        <a-radio-group @change="handleChange" v-model="o.type">
          <a-radio v-for="(i, index) in o.values" v-bind:key="index" :value="i">{{i}}</a-radio>  
        </a-radio-group>
    </div>
  </div>
  </div>
</template>

<script>


export default {
  props:['id'],
  data () {
    return{
      details: [
        {type:'hair', values:['Cabelo Curto', 'Cabelo médio', 'Cabelo longo']},
        {type:'hair', values:['Liso', 'Enrolado', 'Crespo']},
        {type:'skin', values:['Pele Clara', 'Pele média', 'Pele Escura']},
      ]
    }
  },
  computed: {
    selectedServices () {
      const qs = this.$store.getters['data/getData']
      return qs
    }
  },
  methods: {
    handleChange(e,type){
        // const item = {[type]: e}
        // let data = this.selectedServices
        // const self = this 
        // let detail = []
        // let thisClient = []
        //  data.order.clients.map(function(item){
        //     if(item.id === self.id){
        //         thisClient =  item
        //     }
        // })
        // detail.push(item)
        // thisClient.detail = detail
        // this.$store.commit('data/setDetail', thisClient)
        
    }
  }
}
</script>

<style>

.select-qty{
  display: inline-block;
  width: 100%;
  min-width: 200px;
  vertical-align: top;
  margin-right: 1%;
  margin-bottom: 1%;
}
.select-qty .ant-radio-wrapper{
  display: inline-block;
  border-radius:3px;
  border: 1px solid#e4e3e3;
  box-shadow: 0 0 2px 2px #f1f1f1;
  width: 30%;
  padding: 14px 10px;
  white-space: nowrap;
}
.select-qty .ant-radio-wrapper:hover{
  background-color: #ff4359;
  color: #fff;
}
.select-qty .ant-radio-group{
  width: 100%;
}

.select-qty .ant-radio-inner::after{
  background-color: #ff4359;
  border-color: #ff4359;
}
.select-qty .ant-radio-checked .ant-radio-inner{
  border-color: #ff4359;
}
</style>
