<template>
  <div>
    <div class="section-type"> 
      <nav v-for="(i, index) in service" v-bind:key="index">
        <li v-for="(o, index) in i.values" v-bind:key="index">
          <a-checkbox @change="onChange(i.type, $event)" :value="o">{{o}}</a-checkbox>
        </li>
      </nav>
    </div>
    <div  class="select-qty">
     
        <a-radio-group @change="changeHair" :options="detailsHair" v-if="optionsHair">  
        </a-radio-group>
        <a-radio-group @change="changeHairType" :options="detailsHairType" v-if="optionsHair">  
        </a-radio-group>
        <a-radio-group @change="changeSkinType" :options="detailSkinType" v-if="optionsSkin">  
        </a-radio-group>
      
    </div> 
  </div>
</template>

<script>


export default {
  props:['id'],
  data () {
    return{
      optionsHair:false,
      optionsSkin:false,
      servicesSelected: [],
      detailsHair: [
        {value:'Cabelo Curto', label:'Cabelo Curto'},
        {value:'Cabelo médio', label: 'Cabelo médio'},
        {value:'Cabelo longo', label: 'Cabelo longo'}
      ],
      detailsHairType: [
        {value:'Lisoe', label:'Liso'},
        {value:'Enrolado', label: 'Enrolado'},
        {value:'Crespo', label: 'Crespo'}
      ],
      detailSkinType:[
        {value:'Pele Clara', label:'Pele Clara'},
        {value:'Pele Media', label: 'Pele Media'},
        {value:'Pele Escura', label: 'Pele Escura'}
      ],
      service:[
        {type:'hair', values:[ 'Escova', 'Escova Modelada', 'Cortes']},
        {type:'skin', values:['Maquiagem', 'Manicure', 'Pedicure', 'Sobrancelha']}
      ]
    }
  },
  methods: {
    changeHair(e){
      this.$store.commit('data/setDetailLengthHair', {id: this.id, value:e.target.value})
    },
    changeHairType(e){
      this.$store.commit('data/setDetailsHairType', {id: this.id, value:e.target.value})
    },
    changeSkinType(e){
      this.$store.commit('data/setDetailsColorType', {id: this.id, value:e.target.value})
    },
    onChange(type, e) {
      if(e.target.checked){
        this.servicesSelected.push(e.target.value)
      }else{
         const itemSelected = e.target.value
        if(this.servicesSelected.length > 0){
         this.servicesSelected = this.servicesSelected.filter(function(item){
            if( item !== itemSelected){
              return item
            }
          })
        }  
      }
      if(this.servicesSelected.indexOf('Escova') === -1 &&
      this.servicesSelected.indexOf('Escova Modelada') === -1&&  
      this.servicesSelected.indexOf('Cortes') === -1){
          this.optionsHair=false
          this.$store.commit('data/setDetailLengthHair', {id: this.id, value:''})
          this.$store.commit('data/setDetailsHairType', {id: this.id, value:''})

      }else{
          this.optionsHair = true
      }

      if(this.servicesSelected.indexOf('Maquiagem') === -1 &&
      this.servicesSelected.indexOf('Manicure') === -1&&
      this.servicesSelected.indexOf('Pedicure') === -1&&    
      this.servicesSelected.indexOf('Sobrancelha') === -1){
          this.optionsSkin=false
          this.$store.commit('data/setDetailsColorType', {id: this.id, value:''})
      }else{
          this.optionsSkin=true
      }
      this.$store.commit('data/setType', {id: this.id, services:this.servicesSelected})  
    },
  }
}
</script>

<style>

.section-type nav li,
.select-qty div label{
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




.select-qty{
  display: inline-block;
  width: 100%;
  min-width: 200px;
  vertical-align: top;
  margin-right: 1%;
  margin-top: 30px;
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
