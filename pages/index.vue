<template>
  <div>
    <a-row>
      <a-col :span="18">    
        <div v-for="item in service.order.clients"> 
          <SelectType :id ="item.id"/>
          <AboutYou :id="item.id"/>
        </div>
        <a-button type="primary" v-on:click="add()">Add mais Alguém</a-button>
        <div class="content-calendar">
          <a-date-picker @change="onChange" />
          <a-time-picker use12Hours format="h:mm a" @change="timeChange" />
        </div>
      </a-col>
      <a-col :span="6">{{service}}</a-col>
    </a-row>
  </div>
</template>

<script>
import SelectType from '../components/SelectType'
import AboutYou from '../components/AboutYou'

export default {
  components: {
    SelectType, AboutYou
  },
  computed: {
    service () {
      const qs = this.$store.getters['data/getData']
      console.log(qs)
      return qs
    }
  },
  methods: {
    add(){
      this.$store.commit('data/add', {id:this.service.order.clients.length + 1})
    },
    onChange(date, dateString) {
      console.log(date, dateString);
    },
    timeChange(date, dateString) {
      console.log(date, dateString);
    },
  }
}
</script>

<style>
li {list-style: none}
.content-calendar{
  margin-top: 30px;
  margin-bottom: 120px;
}
</style>
