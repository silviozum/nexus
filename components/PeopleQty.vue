<template>
  <div> 
    <div class="select-qty">
        <a-radio-group @change="handleChange" v-model="numberClients">
          <a-radio v-for="(i, index) in amount" v-bind:key="index" :value="i.value">{{i.label }}</a-radio>  
        </a-radio-group>
    </div>
    <div class="select-qty">
        <a-radio-group @change="handleChangeService" v-model="modeWork">
          <a-radio v-for="(i, index) in service" v-bind:key="index" :value="i.value">{{i.label }}</a-radio>  
        </a-radio-group>
    </div>
  </div>
</template>

<script>


export default {
  data () {
    return{
      numberClients: '',
      modeWork: '',
      amount: [
          {label:'Eu', value:1},
          {label:'Eu + 1', value:2},
          {label:'Eu + 2', value:3},
          {label:'Eu + 3', value:4}
      ],
      service: [
          {label:'Um de cada vez', value:'sequential'},
          {label:'Ao mesmo tempo', value:'simultaneous'}
      ],
      serviceSelect: '',
      amountSelect: 1,
      details: []
    }
  },
  computed: {
    selectedServices () {
      const qs = this.$store.getters['data/getData']
      return qs
    },
  },
  methods: {
      handleChange(value){
          console.log(value)
          this.amountSelect = value
      },
      handleChangeService(value){
          console.log(value)
      }
  }
}
</script>

<style>

</style>
