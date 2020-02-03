<template>
  <div> 
    <span>Quantas Pessoas</span>
    <div class="select-qty">
        <a-select defaultValue="Eu" style="width:120px" @change="handleChange">
            <a-select-option v-for="i in amount" :value="i.value">{{i.label}}</a-select-option>
        </a-select>
        <a-select defaultValue="Individual" @change="handleChangeService" v-if="amountSelect > 1">
            <a-select-option v-for="i in service" :value="i.value">{{i.label}}</a-select-option>
        </a-select>
    </div>
    <div class="section-card-detail">
        <div class="card-detail">
            {{selectedServices}}
        </div>
    </div>
  </div>
</template>

<script>


export default {
  data () {
    return{
        amount: [
            {label:'Eu', value:1},
            {label:'Eu + 1', value:2},
            {label:'Eu + 2', value:3},
            {label:'Eu + 3', value:4},
            {label:'Eu + 4', value:5} 
        ],
        service: [
            {label:'Sequencial', value:'sequential'},
            {label:'Simultaneo', value:'simultaneous'}
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
