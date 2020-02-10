<template>
  <div>
    <div class="section-type"> 
      <nav v-for="(i, index) in service" v-bind:key="index">
        <li v-for="(o, index) in i.values" v-bind:key="index">
          <a-checkbox @change="onChange(i.type, $event)" :value="o">{{o}}</a-checkbox>
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
        {type:'hair', values:[ 'Escova', 'Escova Modelada', 'Cortes']},
        {type:'skin', values:['Maquiagem', 'Manicure', 'Pedicure', 'Sobrancelha']}
      ]
    }
  },
  methods: {
    onChange(type, e) {
      if(e.target.checked){
        this.servicesSelected.push({value:e.target.value, type: type})
        this.$store.commit('data/setTypeSelected', {type:type, insert:true}) 
      }else{
         this.$store.commit('data/setTypeSelected', {type:type, insert:false}) 
        // const itemSelected = e.target.value
        // if(this.servicesSelected.length > 0){
        //   const self = this
        //    this.servicesSelected.map(function(item,index){
        //     if(item.value === itemSelected){
        //        self.servicesSelected.splice(index, 1)
        //     }
        //   })
        // }
      }
      // this.$store.commit('data/setClients', {id: this.id, services:this.servicesSelected})  
    
    },
  }
}
</script>

<style>
.section-type nav li{
  display: inline-block;
  width: 30%;
  min-width: 200px;
  vertical-align: top;
  margin-right: 1%;
  margin-bottom: 1%;
}
.section-type .ant-checkbox-wrapper{
  border-radius:3px;
  border: 1px solid#e4e3e3;
  box-shadow: 0 0 2px 2px #f1f1f1;
  width: 100%;
  padding: 14px 10px;
  white-space: nowrap;
}


.section-type .ant-checkbox-checked .ant-checkbox-inner {
  background-color: #ff4359;
  border-color:#fff;
}
.section-type .ant-checkbox-wrapper:hover{
  background-color: #ff4359;
  color: #fff;
}
.section-type .ant-checkbox-wrapper:hover .ant-checkbox-checked .ant-checkbox-inner{
    border-color:#ffff !important;
}
</style>
