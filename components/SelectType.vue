<template>
  <div>
    <div class="section-type"> 
      <nav>
        <li v-for="(i, index) in service" v-bind:key="index" :class="{'active' : i.name === serviceActive}">
          <a-checkbox @change="onChange(i, $event)" :value="i">{{i.name}}</a-checkbox>
        </li>
      </nav>
    </div>
    <div  class="select-qty">
      <a-radio-group @change="changeHair" v-if="optionsHair" v-model="detailsHairActive">
         <a-radio 
          v-for="item in detailsHair"
          :value="item.value" 
          :class="{'active' : item.label === detailsHairActive}"
         >
         {{item.label}}
      </a-radio>  
      </a-radio-group>
      
      <a-radio-group @change="changeHairType" v-if="optionsHair"  v-model="detailsHairTypeActive">
        <a-radio 
            v-for="item in detailsHairType"
            :value="item.value" 
            :class="{'active' : item.label === detailsHairTypeActive}"
          >
          {{item.label}}
        </a-radio>  
      </a-radio-group>
      <a-radio-group @change="changeSkinType" v-if="optionsSkin" v-model="detailSkinTypeActive">
        <a-radio 
            v-for="item in detailSkinType"
            :value="item.value" 
            :class="{'active' : item.label === detailSkinTypeActive}"
          >
          {{item.label}}
        </a-radio>  
      </a-radio-group>
    </div> 
  </div>
</template>

<script>

import { dataService } from '../services'
export default {
  props:['id'],
  data () {
    return{
      optionsHair:true,
      optionsSkin:true,
      servicesSelected: [],
      service:[],
      god: [],
      serviceActive:'',
      detailsHairActive:'',
      detailsHairTypeActive: '',
      detailSkinTypeActive:'',
      detailsHair: [
        {value:'Cabelo Curto', label:'Cabelo Curto'},
        {value:'Cabelo médio', label: 'Cabelo médio'},
        {value:'Cabelo longo', label: 'Cabelo longo'}
      ],
      detailsHairType: [
        {value:'Liso', label:'Liso'},
        {value:'Enrolado', label: 'Enrolado'},
        {value:'Crespo', label: 'Crespo'}
      ],
      detailSkinType:[
        {value:'Pele Clara', label:'Pele Clara'},
        {value:'Pele Media', label: 'Pele Media'},
        {value:'Pele Escura', label: 'Pele Escura'}
      ]
    }
  },
  async mounted () {
    const service = await dataService.getServices()
    this.god = service
    let oldValue =''
    this.service = service.filter(function(item){
      if(item.name !== oldValue){
        oldValue = item.name
        return item
      }
    })

  },
  methods: {
    changeHair(e){
      this.detailsHairActive = e.target.value
      let aux = []
      let selected = this.servicesSelected
      this.god.filter(function(god){
          const n = god.lengthHair.localeCompare( e.target.value);
          if(n > -1){
            selected.map(function(item){
                const d = item.name.localeCompare(god.name);
                if(d  === 0){
                  console.log(d,god)
                  aux.push(god)
                }
            }) 
          }
      })
      this.$store.commit('data/setType', {id: this.id, services:aux}) 
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
  margin-bottom: 30px;
}
.section-type .ant-checkbox-wrapper{
  border-radius:5px;
  border: 1px solid#f0f0f0;
  box-shadow: 1px 1px 3px #ececec;
  width: 100%;
  font-size: 16px;
  padding: 18px 16px;
  font-weight: 600;
  white-space: nowrap;
}

.section-type .ant-checkbox-checked .ant-checkbox-inner {
  background-color: #6749d9;
  border-color:transparent;
}
.section-type .active .ant-checkbox-wrapper,
.section-type .ant-checkbox-wrapper:hover{
  background-color: #6749d9;
  color: #fff;
}
.section-type .ant-checkbox-wrapper:hover .ant-checkbox-checked .ant-checkbox-inner{
    border-color:transparent !important;
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

.active,
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
