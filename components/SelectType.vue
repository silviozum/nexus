<template>
  <div> 
    <div class="section-type" v-for="(o, index) in service" v-bind:key="index">
    <span class="type">{{o.type}}</span>
    <nav>
      <li v-for="(p, index) in o.items" v-bind:key="index">
        <a-checkbox @change="onChange" :value="p">{{p.name}} - R${{p.price}} - Tempo:{{p.time}}</a-checkbox>
      </li>
    </nav>
    </div> 
  </div>
</template>

<script>


export default {
  props:['id'],
  data () {
    return{
      servicesSelected: [],
      service:[
      {
        type: 'Cabelo',
        items: [
          {id: 0, name: 'Escova/Babyliss', price: 110, time: 60},
          {id: 1, name: 'Meio Preso/Rabo de Cavalo ', price: 140, time: 60},
          {id: 2, name: 'Coque ', price: 220, time: 60}
        ]
      },
      {
        type: 'Maquiagem',
        items: [
          {id: 3,name: 'Maquiagem', price: 270, time: 60}
        ]
      },
      {
        type: 'Unhas',
        items: [
          {id: 4, name: 'Manicure', price: 40, time: 60},
          {id: 5, name: 'Pedicure', price: 40, time: 60}
        ]
      },
      {
        type: 'Sobrancelha',
        items: [
          {id: 6, name: 'Manicure', price: 75, time: 60}
        ]
      }
      ]
    }
  },
  methods: {
    onChange(e) {
      if(e.target.checked){
        this.servicesSelected.push(e.target.value)
      }else{
        const itemSelected = e.target.value
        if(this.servicesSelected.length > 0){
          const self = this
           this.servicesSelected.map(function(item,index){
            if(item.id === itemSelected.id){
               self.servicesSelected.splice(index, 1)
            }
          })
          var filtered = this.servicesSelected.filter(function (el) { 
              return el != undefined; 
          });
          this.servicesSelected = filtered 
        }
      }
      this.$store.commit('data/setClients', {id: this.id, services:this.servicesSelected})  
    
    },
  }
}
</script>

<style>
.section-type{
  margin-bottom: 30px;
  padding: 20px;
}
.section-type .type{
  font-size: 16px;
  color:gray;
}
</style>
