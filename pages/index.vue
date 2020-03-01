<template>
  <div>
    <Header/>
    <div class="content-body">  
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
            <div class="section-idx">
                <p>Para a sua experiencia</p>
              </div>
              <Lead />
            </section>
          </div>

          <div class="content-calendar content">
              <div class="content">
              <div class="section-idx">
                <span>3/4</span>
                <p>Selecione seus serviços</p>
              </div> 
            <input type="date">
            <input type="time" change="timeChange">
          </div>
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
  </div>
</template>

<script>
import SelectType from '../components/SelectType'
import PeopleQty from '../components/PeopleQty'
import Header from '../components/Header'
import Address from '../components/Address'
import Lead from '../components/Lead'
import SidebarCheckout from '../components/Sidebar'

export default {
  components: {
    SelectType, PeopleQty, Header, Address, SidebarCheckout, Lead
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

.content-body{
  width: 97%;
  margin: 0 auto;
}
.content{
  background: #fff;
  padding: 40px 34px 35px 34px;
  margin-bottom: 30px;
  border:1px solid #e6e6e6; 
  box-shadow: #e8e8e8 1px 1px 10px;
}

.section-idx{
  display:flex;
  height:  23px;
  margin-bottom: 30px;
  font-family: 'Averia Serif Libre';
  font-weight: bold;
}
.section-idx span{
  margin-right: 7px;
  text-align: center;
  font-size: 11px;
  display: block;
  background-color: #272727;
  color: #fff;
  border-radius: 50px;
  padding: 4px 8px 2px 8px;
}
.section-idx p{
  font-size: 17px;
  font-weight: bold;
  letter-spacing: -1px;
  margin-top: px;
}
</style>
