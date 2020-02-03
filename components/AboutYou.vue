<template>
  <div> 
    <div class="select-qty">
        <a-input placeholder="Cor do Cabelo" v-model="colorHair"  v-on:change.native="handleChange(colorHair, 'colorHair')" />

        <a-select defaultValue="tipo do Cabelo" style="width:320px" @change="handleChange($event, 'typeHair')">
            <a-select-option v-for="(i, index) in typeHair" v-bind:key="index" :value="i.value">{{i.label}}</a-select-option>
        </a-select>

        <a-select defaultValue="Compriment do Cabelo" style="width:320px" @change="handleChange($event, 'lenghtHair')">
            <a-select-option v-for="(i, index) in lenghtHair" v-bind:key="index" :value="i.value">{{i.label}}</a-select-option>
        </a-select>

        <a-select defaultValue="Cor dos Olhos" style="width:320px" @change="handleChange($event, 'colorEye')">
            <a-select-option v-for="(i, index) in colorEye" v-bind:key="index" :value="i.value">{{i.label}}</a-select-option>
        </a-select>
        
        <a-select defaultValue="Cor da Pele" style="width:320px" @change="handleChange($event, 'skincolor')">
            <a-select-option v-for="(i, index) in skinColor" v-bind:key="index" :value="i.value">{{i.label}}</a-select-option>
        </a-select>

        <a-input placeholder="Alergia" v-model="alergy" v-on:change.native="handleChange(alergy, 'alergy')" />

    </div>
  </div>
</template>

<script>


export default {
  props:['id'],
  data () {
    return{
        colorHair:'',
        alergy: '',
        typeHair: [{label:'Liso',value:'liso'}, {label:'Ondulado', value:'ondulado'},
        {label:'Cacheado', value:'cacheado'}, {label:'Crespo', value:'crespo'}],
        lenghtHair: [{label:'Curto',value:'curto'}, {label:'Meio curto', value:'meio_curto'},
        {label:'Médio', value:'médio'}, {label:'Longo', value:'longo'},{label:'Muito Longo', value:'muito_longo'}],
        colorEye: [{label:'Castanho claro',value:'castanho_claro'}, {label:'Castanho', value:'castanho'},
        {label:'Escuro', value:'escuro'}, {label:'Verde', value:'verde'},{label:'Azul', value:'azul'}],
        skinColor: [{label:'Claro', value:'clara'}, {label:'Escura', value:'escura'}]
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
        const item = {[type]: e}
        let data = this.selectedServices
        const self = this 
        let detail = []
        let thisClient = []
         data.order.clients.map(function(item){
            if(item.id === self.id){
                thisClient =  item
            }
        })
        detail.push(item)
        thisClient.detail = detail
        this.$store.commit('data/setDetail', thisClient)
        
    }
  }
}
</script>

<style>

</style>
