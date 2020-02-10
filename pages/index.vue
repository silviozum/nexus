<template>
  <div>
    <Header/>
    <a-row>
      <a-col :span="18">    
        <div v-for="item in service.order.clients">
          <section class="content">
            <div class="section-idx">
              <span>1/4</span>
              <p>Selecione seus servoços</p>
            </div> 
            <SelectType :id ="item.id"/>
          </section>
          <section class="content">
            <div class="section-idx">
              <span>2/4</span>
              <p>Selecione seus servoços</p>
            </div> 
            <AboutYou :id="item.id" v-if="service.typeSelected.length > 0"/>
          </section>
          <section class="content">
            <div class="section-idx">
              <span>3/4</span>
              <p>Selecione seus servoços</p>
            </div> 
            <PeopleQty/>
          </section>
        </div>
        <div class="content-calendar content">
            <div class="section-idx">
              <span>4/4</span>
              <p>Selecione seus servoços</p>
            </div> 
          <input type="date">
          <input type="time" change="timeChange">
        </div>
        <div class="content">
          <div class="section-idx">
            <span>4/4</span>
            <p>Selecione seus servoços</p>
          </div>
          <Address /> 
        </div>
      </a-col>
      <a-col :span="6"></a-col>
    </a-row>
  </div>
</template>

<script>
import SelectType from '../components/SelectType'
import AboutYou from '../components/AboutYou'
import PeopleQty from '../components/PeopleQty'
import Header from '../components/Header'
import Address from '../components/Address'

export default {
  components: {
    SelectType, AboutYou, PeopleQty, Header, Address
  },
  computed: {
    service () {
      const qs = this.$store.getters['data/getData']
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
body{
  background-color: #f5f5f5;
  padding-top: 90px;
}
li {list-style: none}
.content{
  background: #fff;
  padding: 20px;
  margin-bottom: 15px;
  margin-top: 15px;
}

.section-idx{
  display:flex;
  height:  22px;
  margin-bottom: 30px;
}
.section-idx span{
  width: ;
  margin-right: 7px;
  text-align: center;
  font-size: 10px;
  display: block;
  background-color: #272727;
  color: #fff;
  border-radius: 50px;
  padding: 4px 8px 2px 8px;
}
.section-idx p{
  font-size: 14px;
  font-weight: bold;
  margin-top: 1px;
}
</style>
