<template>
  <div>
    <Header/>
    <a-row>
      <a-col :span="18">   
         
        <div v-for="(item,index) in service.order.clients">
          <section class="content">
            
            <div class="section-idx" v-if="index === 0">
              <span>1/4</span>
              <p>Selecione seus serviços</p>
            </div> 

            <div class="section-idx" v-else>
              <span>convidado {{item.id}}</span>
              <p>Selecione seus serviços</p>
            </div>

            <SelectType :id ="item.id"/>
          </section>
          <section class="content" v-if="index === 0 ">
            <div class="section-idx">
              <span>2/4</span>
              <p >Inclua amigos e familiares</p>
            </div> 
            <PeopleQty/>
          </section>
        </div>

        <div class="content-calendar content">
            <div class="section-idx">
              <span>3/4</span>
              <p>Selecione seus serviços</p>
            </div> 
          <input type="date">
          <input type="time" change="timeChange">
        </div>
        <div class="content">
          <div class="section-idx">
            <span>4/4</span>
            <p>Selecione seus serviços</p>
          </div>
          <Address /> 
        </div>
      </a-col>
      <a-col :span="6" style="position:fixed; right:0;">
        <SidebarCheckout />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import SelectType from '../components/SelectType'
import PeopleQty from '../components/PeopleQty'
import Header from '../components/Header'
import Address from '../components/Address'
import SidebarCheckout from '../components/Sidebar'

export default {
  components: {
    SelectType, PeopleQty, Header, Address, SidebarCheckout
  },
  computed: {
    service () {
      const qs = this.$store.getters['data/getData']
      return qs
    }
  },
  methods: {
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
