<template>
  <div> 
      <div v-for="item in selectedServices.order.guestCreateDtos" class="content-sidebar-checkout">
        <div class="service-clients-info">
          <p v-if="item.id === 0">Você</p>
          <p v-if="item.id > 0">Convidado{{item.id}}</p>
         <span v-for="o in item.services">{{o.id}}-{{o.name}}, </span>
        </div>
      <span>{{item.profileCreateDto.lengthHair}},{{item.profileCreateDto.hairType}},{{item.profileCreateDto.skinType}} </span>
      <br>
      <br>
      id's selecionados: 
      {{item.profileCreateDto.productIdDtos}}
      </div> 
      {{selectedServices}} 
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
  margin-right: 20px;
  background: #fff;
  padding: 30px;
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
