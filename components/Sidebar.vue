<template>
  <div> 
      <div v-for="item in selectedServices.order.clients" class="content-sidebar-checkout">
        <div class="service-clients-info">
          <p v-if="item.id === 0">Você</p>
          <p v-if="item.id > 0">Convidado{{item.id}}</p>
         <span v-for="o in item.services">{{o}}, </span>
        </div>
      <span>{{item.details.lengthHair}},{{item.details.typeHair}},{{item.details.typeSkin}} </span>
      </div>  
  </div>
</template>

<script>
export default {
  data () {
    return{
    }
  },
  computed: {
    selectedServices () {
      const qs = this.$store.getters['data/getData']
      return qs
    },
  }
}
</script>

<style>
.content-sidebar-checkout{
  margin-left: 12px;
  background: #fff;
  padding: 20px;
}
.service-clients-info{
  margin-bottom: 20px;
}
.service-clients-info p{
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 0;
}

</style>
