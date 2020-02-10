<template>
  <div class="form-address">
    <a-input class="size31" placeholder="cep" v-model="cep" @pressEnter="getAdress()" @blur="getAdress()"/>
    <a-input class="size93" placeholder="Rua" v-model="logadouro"/>
    <a-input class="size31" placeholder="numero" ref="numero" v-model="numero"/>
    <a-input class="size31" placeholder="complemento" v-model="complemento"/>
    <a-input class="size93" placeholder="Bairro" v-model="bairro"/>
    <a-input class="size31" placeholder="Cidade" v-model="localidade"/>
    <a-input class="size31" placeholder="Estado" v-model="uf"/>
  </div>
</template>

<script>


export default {
    data(){
        return{
            cep:'',
            logadouro:'',
            numero:'',
            complemento:'',
            bairro:'',
            localidade:'',
            uf:'',
        }
    },
    methods:{
        async getAdress(){
            if(this.cep){
                const address = await this.$axios.$get('https://viacep.com.br/ws/'+ this.cep +'/json/') 
                if(address){
                    this.logadouro = address.logradouro
                    this.bairro =  address.bairro
                    this.uf = address.uf
                    this.localidade = address.localidade
                }
                this.$refs.numero.$el.focus()
            }
        }
    },
}
</script>

<style>

.form-address .size31,.form-address .size62,.form-address .size93{
    margin:0 6px 10px 0;
    padding: 22px 12px;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.15);
    font-size: 14px;
}
.form-address .size31{
    width:31%;
}
.form-address .size62{
    width:62%;
}
.form-address .size93{
    width:93%;
}
</style>
