<template>
  <div> 
    <div class="select-qty">
        <a-radio-group :options="amount" @change="handleChange" :defaultValue="value1"></a-radio-group>
    </div>
    <div class="select-qty">
        <a-radio-group :options="service" @change="handleChangeService"></a-radio-group>
    </div>
  </div>
</template>

<script>
const amount =  [
    {label:'Eu', value:0},
    {label:'Eu + 1', value:1},
    {label:'Eu + 2', value:2},
    {label:'Eu + 3', value:3}
]
const service = [
    {label:'Um de cada vez', value:'sequential'},
    {label:'Ao mesmo tempo', value:'simultaneous'}
]

export default {
  data () {
    return{
      value1:0,
      amount,
      service,
    }
  },
  computed: {
    selectedServices () {
      const qs = this.$store.getters['data/getData']
      return qs
    },
  },
  methods: {
      handleChange(e){
          this.$store.commit('data/add', e.target.value)
      },
      handleChangeService(e){
        console.log(e.target.value)
      }
  }
}
</script>

<style>

</style>
